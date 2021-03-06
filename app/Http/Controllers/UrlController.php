<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use Hashids\Hashids;
use App\Url;
use App\Http\Controllers\Controller;
use Jenssegers\Agent\Agent;
use PhpParser\Node\Expr\Cast\Object_;
use Ramsey\Uuid\Uuid;
use Ramsey\Uuid\Exception\UnsatisfiedDependencyException;
use Carbon\Carbon;
use GeoIp2\Exception\AddressNotFoundException;
use App\Classes\Utility;
use Illuminate\Database\QueryException;

class UrlController extends Controller
{


	/*
	* Returns count of Non-deleted Urls
	*/
	public function getCount(){
		// Count the Urls form DB
		$count = Url::count();

		// Build the response object
		$res = new \stdClass();
		$res->status = "Success";
		$res->data = $count;

		// Send the response Object as Json in response
		return response()->json($res, 200);
	}


	/*
	* Return single url data
	*/
	public function getUrl($id){
		// validate the paginateCount
		if(!preg_match('/^[1-9][0-9]*$/', $id)){
			$error = Utility::getError(null, 400, 'Error', 'Invalid Url Id');
			return response()->json($error, 400);
		}

		// Query Url by id from DB
		$url = Url::find($id);

		//	validate queried url
		if(empty($url)){
			$error = Utility::getError(null, 404, 'Error', 'Url Not Found');
			return response()->json($error, 404);
		}

		// Build response object
		$res = new \stdClass();
		$res->status = 'Success';
		$res->data = $url;
		$res->message = 'Successfully Deleted';
		return response()->json($res, 200);


		//	Send response Object as json string
		return response()->json($res, 200);
	}


	/*
	* Return all categories and their counts
	*/
	public function getCategories(){
		//	Query the category and its count from DB
		$urls = Url::select(\DB::raw('count(category) as count, category as name'))->groupBy('category')->get();

		//	Build the response Object
		$res = new \stdClass();
		$res->status = "Success";
		$res->data = $urls;
		$res->count = $urls->count();

		// Send the response object as json in response
		return response()->json($res);
	}

	/*
	* Return limited urls range $from with $length
	*/
	public function getPaginateUrls($paginateCount){
		// validate the paginateCount
		if(!preg_match('/^[1-9][0-9]*$/', $paginateCount)){
			$error = Utility::getError(null, 400, 'Error', 'Invalid pagination');
			return response()->json($error, 400);
		}

		//	sorting query parameter
		$givenSortCol = Input::get('sort');
		$givenSortDesc = Input::get('desc');
		$givenSortAsc = Input::get('asc');

		//	Category query parameter
		$category = Input::get('category');

		//	Seach query parameter
		$search = Input::get('search');

		// Get del query parameter for quering only deleted urls
		$isDeleted = Input::get('del');

		//	validate and handle sorting data
		$sortData = Utility::getSortData($givenSortCol, $givenSortDesc, $givenSortAsc);

		if(isset($isDeleted) && $isDeleted == true){
			// Query Deleted Url in paginated manner
			if(isset($category) && $category !== '' && (!isset($search) || $search === '')){
				$urls = Url::where('category', $category)->orderBy($sortData->sortCol, $sortData->sortType)->onlyTrashed()->paginate($paginateCount);
			}
			else if(isset($search) && $search !== '' && (!isset($category) || $category === '')){
				$urls = Url::where('long_url', 'like', '%'.$search.'%')->orderBy($sortData->sortCol, $sortData->sortType)->onlyTrashed()->paginate($paginateCount);
			}
			else if(isset($category) && $category !== '' && isset($search) && $search !== ''){
				$urls = Url::where('long_url', 'like', '%'.$search.'%')->where('category', $category)->orderBy($sortData->sortCol, $sortData->sortType)->onlyTrashed()->paginate($paginateCount);
			}
			else{
				$urls = Url::orderBy($sortData->sortCol, $sortData->sortType)->onlyTrashed()->paginate($paginateCount);
			}
		}else{
			// Query Url in paginated manner
			if(isset($category) && $category !== '' && (!isset($search) || $search === '')){
				$urls = Url::where('category', $category)->orderBy($sortData->sortCol, $sortData->sortType)->paginate($paginateCount);
			}
			else if(isset($search) && $search !== '' && (!isset($category) || $category === '')){
				$urls = Url::where('long_url', 'like', '%'.$search.'%')->orderBy($sortData->sortCol, $sortData->sortType)->paginate($paginateCount);
			}
			else if(isset($category) && $category !== '' && isset($search) && $search !== ''){
				$urls = Url::where('long_url', 'like', '%'.$search.'%')->where('category', $category)->orderBy($sortData->sortCol, $sortData->sortType)->paginate($paginateCount);
			}
			else{
				$urls = Url::orderBy($sortData->sortCol, $sortData->sortType)->paginate($paginateCount);
			}
		}

		//	Add attribute 'time' as Human readable time( elapsed or remaining)
		foreach ($urls as $key => $value) {
			$value['time'] = $value['created_at']->diffForHumans(Carbon::now());
		}

		//	Build the response object
		$res = new \stdClass();
		$res->count = $urls->count();
		$res->status = "Success";
		$res->data = $urls;

		//	Send response Object as json string
		return response()->json($res, 200);
	}

	/*
	* Return Soft- deleted url, with pagination
	*/
	public function getPaginateDeleted($paginateCount){
		//	sorting query parameter
		$givenSortCol = Input::get('sort');
		$givenSortDesc = Input::get('desc');
		$givenSortAsc = Input::get('asc');

		//	validate and handle sorting data
		$sortData = Utility::getSortData($givenSortCol, $givenSortDesc, $givenSortAsc);

		// Query Url in paginated manner
		$urls = Url::orderBy($sortData->sortCol, $sortData->sortType)->onlyTrashed()->paginate($paginateCount);

		//	Add attribute 'time' as Human readable time( elapsed or remaining)
		foreach ($urls as $key => $value) {
			$value['time'] = $value['created_at']->diffForHumans(Carbon::now());
		}

		//	Build the response object
		$res = new \stdClass();
		$res->count = $urls->count();
		$res->status = "Success";
		$res->data = $urls;

		//	Send response Object as json string
		return response()->json($res, 200);
	}

	/*
	* Soft Delete the Url specified by id
	*/
	public function softDelete($id){
		// validate the Url Id
		if(!preg_match('/^[1-9][0-9]*$/', $id)){
			$error = Utility::getError(null, 400, 'Error', 'Invalid Url Id');
			return response()->json($error, 400);
		}

		// Query Url by id from DB
		$url = Url::find($id);

		//	validate queried url
		if(empty($url)){
			$error = Utility::getError(null, 404, 'Error', 'Url Not Found');
			return response()->json($error, 404);
		}

		$url->delete($id);

		// Build response object
		$res = new \stdClass();
		$res->status = 'Success';
		$res->data = $url;
		$res->message = 'Successfully Deleted';
		return response()->json($res, 200);
	}


	/*
	* Recover url from Soft Delete
	*/
	public function recoverUrl($id){
		// validate the Url Id
		if(!preg_match('/^[1-9][0-9]*$/', $id)){
			$error = Utility::getError(null, 400, 'Error', 'Invalid Url Id');
			return response()->json($error, 400);
		}

		// Query Url by id from DB
		$url = Url::onlyTrashed()->where('id', $id)->restore();

		//	validate queried url
		if($url == 0){
			$error = Utility::getError(null, 404, 'Error', 'Url Not Found');
			return response()->json($error, 404);
		}

		// Build response object
		$res = new \stdClass();
		$res->status = 'Success';
		$res->data = $url;
		$res->message = 'Successfully Recoverd';
		return response()->json($res, 200);
	}



	/**
	* Store a newly created Url in storage.
	* Required: long_url
	* Optional: custom_key, category
	*/
	public function create(Request $request){
		//	Get the largest Id of url from db
		$maxId = Url::withTrashed()->max('id');

		//	Validate maxId, and fix it
		if(!isset($maxId)){
			$maxId = 0;
		}

		//	Validate custom Key (key for short url), and generate new one using MAXID
		if(empty($request["custom_key"])){
			$hashids = new Hashids('smpx', 6);
			$hashedUrl = $hashids->encode($maxId++);
		}else{
			$hashedUrl = $request["custom_key"];
		}

		//	trim long url (Original Url)
		$longUrl = trim($request["long_url"]);

		//	Validate Long Url and send error if invalid
		if(strlen($longUrl) <= 0){
			$error = Utility::getError(null, 400, 'Error', 'Invalid Url');
			return response()->json($error, 400);
		}

		//	Check whether Long url contains http protocol or not, If not then append 'http://'
		//	Here not checking for protocols other than http
		if(substr($longUrl, 0, 7) !== "http://" and substr($longUrl, 0, 8) !== "https://"){
			$longUrl = 'http://' . $longUrl ;
		}

		//	Validate category
		if(!isset($request["category"]) || $request["category"] == ''){
			$category = 'no_category';
		}else{
			$category = $request["category"];
		}

		//	build array object of Url data to save to DB
		$array = array(
			'long_url' => $longUrl,
			'short_url' => config('app.url'). '/' . $hashedUrl,
			'is_active' => true,
			'clicks' => 0,
			'category' => $category
		);

		try{
			//	save Url data to DB
			$urlInstance = Url::create($array);
		}catch(QueryException $e){
			// Make logging for QueryException
			$error = Utility::getError(null, 400, 'Error', 'Duplicate Entry of short Url');
			return response()->json($error, 400);
		}


		//	Add attribute 'time' containing humna readable time format
		$urlInstance['time'] = $urlInstance['created_at']->diffForHumans(Carbon::now());

		//	Build response object
		$res = new \stdClass();
		$res->status = 'Success';
		$res->data = $urlInstance;
		$res->message = 'Successfully created';

		//	Send response Object in json string
		return response()->json($res, 200);
	}


	/**
	* Redirects to Original Url
	*/
	public function redirect(Request $request, $shortUrl){
		//	Initiate Agent object for parsing header information
		$agent = new Agent();

		// Setting header to agent
		$agent->setUserAgent($request->headers);

		//	Query the url object from DB by shortUrl column
		$urls = Url::where('short_url', '=', config('app.url'). '/' . $shortUrl)->get();

		//	Check whether Url object exists
		if(!$urls->first()){
			$error = Utility::getError(null, 404, 'Error', 'Url Not Found');
			return response()->json($error, 404);
		}

		// get the queried url from collection
		$url = $urls[0];

		// Get the long_url value for managing query string
		$longUrl = $url['long_url'];

		try {
			// Generate a version 1 (time-based) UUID object
			if(!isset($_COOKIE['_id'])){
				$cookieUuid1 = Uuid::uuid1();
				setcookie('_id', $cookieUuid1->toString(), time() + 10 * 365 * 24 * 3600, "/");
			}else{
				$cookieUuid1 = $_COOKIE['_id'];
			}
			if(!isset($_COOKIE['_sid'])){
				$sessionUuid1 = Uuid::uuid1();
				setcookie('_sid', $sessionUuid1->toString(), 0, "/");
			}else{
				$sessionUuid1 = $_COOKIE['_sid'];
			}
		} catch (UnsatisfiedDependencyException $e){
			$error = Utility::getError($e, 500, 'Error', 'Please try again...');
			return response()->json($error, 500);
		}

		//	Default value of Http Referrer for saving into db
		$httpReferrer = 'Undefined';

		//	If Http referrer exists, replace the default value by it
		if(!empty($_SERVER['HTTP_REFERER'])){
			$httpReferrer = $_SERVER['HTTP_REFERER'];
		}

		try{
			$city = Utility::getCity($_SERVER["REMOTE_ADDR"]);
			$state = Utility::getState($_SERVER["REMOTE_ADDR"]);
			$country = Utility::getCountry($_SERVER["REMOTE_ADDR"]);
			$countryIsoCode = strtolower(Utility::getCountryIsoCode($_SERVER["REMOTE_ADDR"]));
		}catch(AddressNotFoundException $e){
			// Make logging for AddressNotFoundException exception
			//Utility::log($e);
			$city = '';
			$state = '';
			$country = '';
			$countryIsoCode = '';
		}

		// Increment clicks  column by one
		$url->clicks = $url['clicks'] +1;

		//	Save the url instance
		$url->save();

		//	create the new Hit instance for the url instance
		$url->hits()->create([
			'client_ip' => $_SERVER['REMOTE_ADDR'],
			'language' => $agent->languages()[0],
			'device' => $agent->device(),
			'platform' => $agent->platform(),
			'browser' => $agent->browser(),
			'cookie_id' => $cookieUuid1,
			'session_id' => $sessionUuid1,
			'user_agent' => $_SERVER['HTTP_USER_AGENT'],
			'referrers' => $httpReferrer,
			'remote_addr' => $_SERVER["REMOTE_ADDR"],
			'remote_port' => $_SERVER["REMOTE_PORT"],
			'remote_method' => $_SERVER["REQUEST_METHOD"],
			'city' => $city,
			'state' => $state,
			'country' => $country,
			'country_iso_code' => $countryIsoCode
		]);

		//	Get all query parameter of short url
		$shortQuery = $request->all();

		//	Get all url parameter of long url
		$parsedLongUrl = parse_url($longUrl);

		//	Code for merging query parameter of short Url and long Url keeping the short url as prior
		//	Redirect to the original Url
		if(isset($parsedLongUrl["query"])){
			parse_str($parsedLongUrl["query"], $longQuery);

			$commonKeys = array_intersect_key($longQuery, $shortQuery);

			$finalQuery = array_diff($shortQuery, $commonKeys) + array_diff($longQuery, $commonKeys) + $commonKeys;

			if(isset($parsedLongUrl['port']))
			return redirect($parsedLongUrl['scheme'] . '://' . $parsedLongUrl['host'] . ':' . $parsedLongUrl['port'] . $parsedLongUrl['path'] . '?' . http_build_query($finalQuery));
			else
			return redirect($parsedLongUrl['scheme'] . '://' . $parsedLongUrl['host'] . $parsedLongUrl['path'] . '?' . http_build_query($finalQuery));
		}else{
			if(empty($shortQuery))
			return redirect($longUrl);
			else
			return redirect($longUrl . '?' . http_build_query($shortQuery));
		}
	}


	/**
	* Returns the url Clicks analytics data
	*/
	public function getClickAnalytics(Request $request, $id){
		// validate the Url Id
		if(!preg_match('/^[1-9][0-9]*$/', $id)){
			$error = Utility::getError(null, 400, 'Error', 'Invalid Url Id');
			return response()->json($error, 400);
		}

		$rangeTo = Input::get('t');
		$rangeFrom = Input::get('f');
		$unit = Input::get('u');

		Utility::getUnit($unit);

		//	Fetch Url instance from DB
		$url = Url::find($id);


		// Validate Fetch Url
		if(empty($url)){
			$error = Utility::getError(null, 404, 'Error', 'Url Not Found');
			return response()->json($error, 404);
		}


		//	Pull Click Session Count lies within a time range from DB
		$clickSessionCount= $url->hits()->whereBetween('created_at', array( $rangeFrom , $rangeTo))
		->distinct('session_id')->count('session_id');

		//	Pull Click Cookie Count lies within a time range from DB
		$clickCookieCount= $url->hits()->whereBetween('created_at', array( $rangeFrom , $rangeTo))
		->distinct('cookie_id')->count('cookie_id');

		//	Pull Click Total Count lies within a time range from DB
		$clickTotalCount= $url->hits()->whereBetween('created_at', array( $rangeFrom , $rangeTo))
		->count('id');


		//	fetch click session, total, cookie data
		$clickSessionData = $url->hits()->whereBetween('created_at', array( $rangeFrom , $rangeTo))
		->select(\DB::raw('created_at, session_id'))->get()
		->groupBy(function($date){
			return Carbon::parse($date->created_at)->format($GLOBALS['unit']);
		});

		//$c = Utility::formatClickData($clickSessionData, $unit);
		//echo json_encode($clickSessionData);return;

		$clickUserData = $url->hits()->whereBetween('created_at', array( $rangeFrom , $rangeTo))
		->select(\DB::raw('created_at, cookie_id'))->get()
		->groupBy(function($date) {
			return Carbon::parse($date->created_at)->format($GLOBALS['unit']); // grouping by years
		});

		$clickTotalData = $url->hits()->whereBetween('created_at', array( $rangeFrom , $rangeTo))
		->select(\DB::raw('created_at'))->get()
		->groupBy(function($date) {
			return Carbon::parse($date->created_at)->format($GLOBALS['unit']); // grouping by years
		});

		//	Final result object
		$clickResult = array(array());
		$clickSessionResult = array();
		$clickUserResult = array();
		$clickTotalResult = array();

		//	Count the fetch data and set final result
		foreach ($clickSessionData as $key => $value) {
			$distinctArray = array();
			foreach ($value as $valueKey => $valueValue) {
				$distinctArray[] = $valueValue['session_id'];
			}
			$countElement = count(array_unique($distinctArray));
			$clickResult[$key]['session'] = $countElement;
		}

		foreach ($clickUserData as $key => $value) {
			$distinctArray = array();
			foreach ($value as $valueKey => $valueValue) {
				$distinctArray[] = $valueValue['cookie_id'];
			}
			$countElement = count(array_unique($distinctArray));
			$clickResult[$key]['user'] = $countElement;
		}

		foreach ($clickTotalData as $key => $value) {
			$distinctArray = array();
			foreach ($value as $valueKey => $valueValue) {
				$distinctArray[] = $valueValue['cookie_id'];
			}
			$countElement = count(($distinctArray));
			$clickResult[$key]['total'] = $countElement;
		}

		$emptyObject = new \stdClass();
		$emptyObject->session = 0;
		$emptyObject->user = 0;
		$emptyObject->total = 0;

		$startTime = Carbon::createFromFormat('yy-m-d H:i:s', $rangeFrom);
		$endTime = Carbon::createFromFormat('yy-m-d H:i:s', $rangeTo);

		//	Counter for Second unit, Which limit to certain no of data
		$secCounterLimit = config('app.secCounterLimit');
		$secCounter = 0;

		while($startTime <= $endTime){
			$iniTimeStr = $startTime->format($GLOBALS['unit']);
			if(!array_key_exists($iniTimeStr, $clickResult)){
				$clickResult[$iniTimeStr] = $emptyObject;
			}
			switch ($unit) {
				case 'sec':
				$startTime = $startTime->addSecond();
				$secCounter++;
				if($secCounter == $secCounterLimit){
					$error = Utility::getError(null, 400, "Error", "Range is to High for Second, Please minimize your range");
					return response()->json($error, 400);
				}
				break;
				case 'min':
				$startTime = $startTime->addMinute();
				$secCounter++;
				if($secCounter == $secCounterLimit){
					$error = Utility::getError(null, 400, "Error", "Range is to High for Minute, Please minimize your range");
					return response()->json($error, 400);
				}
				break;
				case 'hr':
				$startTime = $startTime->addHour();
				$secCounter++;
				if($secCounter == $secCounterLimit){
					$error = Utility::getError(null, 400, "Error", "Range is to High for Hour, Please minimize your range");
					return response()->json($error, 400);
				}
				break;
				case 'dt':
				$startTime = $startTime->addDay();
				$secCounter++;
				if($secCounter == $secCounterLimit){
					$error = Utility::getError(null, 400, "Error", "Range is to High for Day, Please minimize your range");
					return response()->json($error, 400);
				}
				break;
				case 'wk':
				$startTime = $startTime->addWeek();
				break;
				case 'mnth':
				$startTime = $startTime->addMonth();
				break;
				case 'yr':
				$startTime = $startTime->addYear();
				break;
				default:
				$startTime = $startTime->addDay();
				break;
			}
		}

		//remove 0 the element , it contains none
		unset($clickResult[0]);

		// Sort the time(Key)
		uksort($clickResult, array('App\Classes\Utility', 'sortClickData'));

		$clickResult['sessionCount'] = $clickSessionCount;
		$clickResult['cookieCount'] = $clickCookieCount;
		$clickResult['totalCount'] = $clickTotalCount;

		//	Build response object
		$res = new \stdClass();
		$res->status = "Success";
		$res->data = $clickResult;
		return response()->json($res, 200);
	}

	/**
	* Returns the url Platform analytics data
	*/
	public function getPlatformAnalytics(Request $request, $id){
		// validate the Url Id
		if(!preg_match('/^[1-9][0-9]*$/', $id)){
			$error = Utility::getError(null, 400, 'Error', 'Invalid Url Id');
			return response()->json($error, 400);
		}

		$rangeTo = Input::get('t');
		$rangeFrom = Input::get('f');
		//	No use Unit here
		$unit = Input::get('u');


		//	Fetch Url instance from DB
		$url = Url::find($id);

		// Validate Fetch Url
		if(empty($url)){
			$error = Utility::getError(null, 404, 'Error', 'Url Not Found');
			return response()->json($error, 404);
		}

		$platformData = $url->hits()->whereBetween('created_at', array( $rangeFrom , $rangeTo))
		->select(\DB::raw('count(*) as count, platform'))
		->groupBy('platform')
		->get();

		//	Build response object
		$res = new \stdClass();
		$res->status = "Success";
		$res->data = $platformData;
		return response()->json($res, 200);
	}


	/**
	* Returns the url Referrer analytics data
	*/
	public function getReferrerAnalytics(Request $request, $id){
		// validate the Url Id
		if(!preg_match('/^[1-9][0-9]*$/', $id)){
			$error = Utility::getError(null, 400, 'Error', 'Invalid Url Id');
			return response()->json($error, 400);
		}

		$rangeTo = Input::get('t');
		$rangeFrom = Input::get('f');
		//	No use Unit here
		$unit = Input::get('u');


		//	Fetch Url instance from DB
		$url = Url::find($id);

		// Validate Fetch Url
		if(empty($url)){
			$error = Utility::getError(null, 404, 'Error', 'Url Not Found');
			return response()->json($error, 404);
		}

		//	Handle the given unit and pick the right one unit for fetching data from DB
		Utility::getUnit($unit);

		$referrerData = $url->hits()->whereBetween('created_at', array( $rangeFrom , $rangeTo))
		->select(\DB::raw('count(*) as count, referrers'))
		->groupBy('referrers')
		->get();

		//	Build response object
		$res = new \stdClass();
		$res->status = "Success";
		$res->data = $referrerData;
		return response()->json($res, 200);

	}


	/**
	* Returns the url Country analytics data
	*/
	public function getCountryAnalytics(Request $request, $id){
		// validate the Url Id
		if(!preg_match('/^[1-9][0-9]*$/', $id)){
			$error = Utility::getError(null, 400, 'Error', 'Invalid Url Id');
			return response()->json($error, 400);
		}

		$rangeTo = Input::get('t');
		$rangeFrom = Input::get('f');
		//	No use Unit here
		$unit = Input::get('u');


		//	Fetch Url instance from DB
		$url = Url::find($id);

		// Validate Fetch Url
		if(empty($url)){
			$error = Utility::getError(null, 404, 'Error', 'Url Not Found');
			return response()->json($error, 404);
		}

		$countryData = $url->hits()->whereBetween('created_at', array( $rangeFrom , $rangeTo))->distinct('country_iso_code')
		->select(\DB::raw('count(*) as count, country_iso_code'))
		->groupBy('country_iso_code')
		->get();

		//response data
		$resultData = array();
		foreach ($countryData as $key => $value) {
			$resultData[$value['country_iso_code']] = $value['count'];
		}

		//	Build response object
		$res = new \stdClass();
		$res->status = "Success";
		$res->data = $resultData;
		return response()->json($res, 200);

	}


	/**
	* Returns the url Country analytics data
	*/
	public function getCityAnalytics(Request $request, $id){
		// validate the Url Id
		if(!preg_match('/^[1-9][0-9]*$/', $id)){
			$error = Utility::getError(null, 400, 'Error', 'Invalid Url Id');
			return response()->json($error, 400);
		}

		$rangeTo = Input::get('t');
		$rangeFrom = Input::get('f');
		//	No use Unit here
		$unit = Input::get('u');


		//	Fetch Url instance from DB
		$url = Url::find($id);

		// Validate Fetch Url
		if(empty($url)){
			$error = Utility::getError(null, 404, 'Error', 'Url Not Found');
			return response()->json($error, 404);
		}

		$platformData = $url->hits()->whereBetween('created_at', array( $rangeFrom , $rangeTo))
		->select(\DB::raw('count(*) as count, city, country'))
		->groupBy('city')
		->get();

		//	Build response object
		$res = new \stdClass();
		$res->status = "Success";
		$res->data = $platformData;
		return response()->json($res, 200);
	}

	/**
	* Returns the url Clicks analytics data
	*/
	public function getCategoryClickAnalytics(Request $request, $category){
		$rangeTo = Input::get('t');
		$rangeFrom = Input::get('f');
		$unit = Input::get('u');

		Utility::getUnit($unit);

		if(!strcmp($category, 'all')){
			$clickSessionCount = Url::join('hits', 'urls.id', '=', 'hits.url_id')
			->whereBetween('hits.created_at', array( $rangeFrom , $rangeTo)) // Optional: downgrade to non-eloquent builder so we don't build invalid User objects.
			->distinct('session_id')->count('hits.session_id');

			$clickCookieCount = Url::join('hits', 'urls.id', '=', 'hits.url_id')
			->whereBetween('hits.created_at', array( $rangeFrom , $rangeTo))
			->distinct('cookie_id')->count('hits.cookie_id');

			$clickTotalCount = Url::join('hits', 'urls.id', '=', 'hits.url_id')
			->whereBetween('hits.created_at', array( $rangeFrom , $rangeTo))
			->count('hits.id');

			//	fetch click session, total, cookie data
			$clickUserData = Url::join('hits', 'urls.id', '=', 'hits.url_id')
			->whereBetween('hits.created_at', array( $rangeFrom , $rangeTo))
			->select(\DB::raw('hits.created_at, hits.cookie_id'))->get()
			->groupBy(function($date) {
				return Carbon::parse($date->created_at)->format($GLOBALS['unit']); // grouping by years
			});

			$clickSessionData = Url::join('hits', 'urls.id', '=', 'hits.url_id')
			->whereBetween('hits.created_at', array( $rangeFrom , $rangeTo))
			->select(\DB::raw('hits.created_at, hits.session_id'))->get()
			->groupBy(function($date){
				return Carbon::parse($date->created_at)->format($GLOBALS['unit']);
			});

			$clickTotalData = Url::join('hits', 'urls.id', '=', 'hits.url_id')
			->whereBetween('hits.created_at', array( $rangeFrom , $rangeTo))
			->select(\DB::raw('hits.created_at'))->get()
			->groupBy(function($date) {
				return Carbon::parse($date->created_at)->format($GLOBALS['unit']); // grouping by years
			});
		}else{
			$clickSessionCount = Url::join('hits', 'urls.id', '=', 'hits.url_id')->where('category',$category)
			->whereBetween('hits.created_at', array( $rangeFrom , $rangeTo)) // Optional: downgrade to non-eloquent builder so we don't build invalid User objects.
			->distinct('session_id')->count('hits.session_id');

			$clickCookieCount = Url::join('hits', 'urls.id', '=', 'hits.url_id')->where('category',$category)
			->whereBetween('hits.created_at', array( $rangeFrom , $rangeTo))
			->distinct('cookie_id')->count('hits.cookie_id');

			$clickTotalCount = Url::join('hits', 'urls.id', '=', 'hits.url_id')->where('category',$category)
			->whereBetween('hits.created_at', array( $rangeFrom , $rangeTo))
			->count('hits.id');

			//	fetch click session, total, cookie data
			$clickUserData = Url::join('hits', 'urls.id', '=', 'hits.url_id')->where('category',$category)
			->whereBetween('hits.created_at', array( $rangeFrom , $rangeTo))
			->select(\DB::raw('hits.created_at, hits.cookie_id'))->get()
			->groupBy(function($date) {
				return Carbon::parse($date->created_at)->format($GLOBALS['unit']); // grouping by years
			});

			$clickSessionData = Url::join('hits', 'urls.id', '=', 'hits.url_id')->where('category',$category)
			->whereBetween('hits.created_at', array( $rangeFrom , $rangeTo))
			->select(\DB::raw('hits.created_at, hits.session_id'))->get()
			->groupBy(function($date){
				return Carbon::parse($date->created_at)->format($GLOBALS['unit']);
			});

			$clickTotalData = Url::join('hits', 'urls.id', '=', 'hits.url_id')->where('category',$category)
			->whereBetween('hits.created_at', array( $rangeFrom , $rangeTo))
			->select(\DB::raw('hits.created_at'))->get()
			->groupBy(function($date) {
				return Carbon::parse($date->created_at)->format($GLOBALS['unit']); // grouping by years
			});
		}



		//	Final result object
		$clickResult = array(array());
		$clickSessionResult = array();
		$clickUserResult = array();
		$clickTotalResult = array();
		//return response()->json($clickSessionData);
		//	Count the fetch data and set final result
		foreach ($clickSessionData as $key => $value) {
			$distinctArray = array();
			foreach ($value as $valueKey => $valueValue) {
				$distinctArray[] = $valueValue['session_id'];
			}
			$countElement = count(array_unique($distinctArray));
			$clickResult[$key]['session'] = $countElement;
		}

		foreach ($clickUserData as $key => $value) {
			$distinctArray = array();
			foreach ($value as $valueKey => $valueValue) {
				$distinctArray[] = $valueValue['cookie_id'];
			}
			$countElement = count(array_unique($distinctArray));
			$clickResult[$key]['user'] = $countElement;
		}

		foreach ($clickTotalData as $key => $value) {
			$distinctArray = array();
			foreach ($value as $valueKey => $valueValue) {
				$distinctArray[] = $valueValue['cookie_id'];
			}
			$countElement = count(($distinctArray));
			$clickResult[$key]['total'] = $countElement;
		}

		$emptyObject = new \stdClass();
		$emptyObject->session = 0;
		$emptyObject->user = 0;
		$emptyObject->total = 0;

		$startTime = Carbon::createFromFormat('yy-m-d H:i:s', $rangeFrom);
		$endTime = Carbon::createFromFormat('yy-m-d H:i:s', $rangeTo);

		//	Counter for Second unit, Which limit to certain no of data
		$secCounterLimit = config('app.secCounterLimit');
		$secCounter = 0;

		while($startTime <= $endTime){
			$iniTimeStr = $startTime->format($GLOBALS['unit']);
			if(!array_key_exists($iniTimeStr, $clickResult)){
				$clickResult[$iniTimeStr] = $emptyObject;
			}
			switch ($unit) {
				case 'sec':
				$startTime = $startTime->addSecond();
				$secCounter++;
				if($secCounter == $secCounterLimit){
					$error = Utility::getError(null, 400, "Error", "Range is to High for Second, Please minimize your range");
					return response()->json($error, 400);
				}
				break;
				case 'min':
				$startTime = $startTime->addMinute();
				$secCounter++;
				if($secCounter == $secCounterLimit){
					$error = Utility::getError(null, 400, "Error", "Range is to High for Minute, Please minimize your range");
					return response()->json($error, 400);
				}
				break;
				case 'hr':
				$startTime = $startTime->addHour();
				$secCounter++;
				if($secCounter == $secCounterLimit){
					$error = Utility::getError(null, 400, "Error", "Range is to High for Hour, Please minimize your range");
					return response()->json($error, 400);
				}
				break;
				case 'dt':
				$startTime = $startTime->addDay();
				$secCounter++;
				if($secCounter == $secCounterLimit){
					$error = Utility::getError(null, 400, "Error", "Range is to High for Day, Please minimize your range");
					return response()->json($error, 400);
				}
				break;
				case 'wk':
				$startTime = $startTime->addWeek();
				break;
				case 'mnth':
				$startTime = $startTime->addMonth();
				break;
				case 'yr':
				$startTime = $startTime->addYear();
				break;
				default:
				$startTime = $startTime->addDay();
				break;
			}
		}

		//remove 0 the element , it contains none
		unset($clickResult[0]);

		// Sort the time(Key)
		uksort($clickResult, array('App\Classes\Utility', 'sortClickData'));

		$clickResult['sessionCount'] = $clickSessionCount;
		$clickResult['cookieCount'] = $clickCookieCount;
		$clickResult['totalCount'] = $clickTotalCount;

		//	Build response object
		$res = new \stdClass();
		$res->status = "Success";
		$res->data = $clickResult;
		return response()->json($res, 200);
	}

	/**
	* Returns the url Platform analytics data
	*/
	public function getCategoryPlatformAnalytics(Request $request, $category){

		$rangeTo = Input::get('t');
		$rangeFrom = Input::get('f');
		//	No use Unit here
		$unit = Input::get('u');

		if(!strcmp($category, 'all')){
			$platformData = Url::join('hits', 'urls.id', '=', 'hits.url_id')
			->whereBetween('hits.created_at', array( $rangeFrom , $rangeTo))
			->select(\DB::raw('count(*) as count, platform'))
			->groupBy('platform')
			->get();
		}else{
			$platformData = Url::join('hits', 'urls.id', '=', 'hits.url_id')->where('category',$category)
			->whereBetween('hits.created_at', array( $rangeFrom , $rangeTo))
			->select(\DB::raw('count(*) as count, platform'))
			->groupBy('platform')
			->get();
		}


		//	Build response object
		$res = new \stdClass();
		$res->status = "Success";
		$res->data = $platformData;
		return response()->json($res, 200);
	}


	/**
	* Returns the url Referrer analytics data
	*/
	public function getCategoryReferrerAnalytics(Request $request, $category){

		$rangeTo = Input::get('t');
		$rangeFrom = Input::get('f');
		//	No use Unit here
		$unit = Input::get('u');



		//	Handle the given unit and pick the right one unit for fetching data from DB
		Utility::getUnit($unit);

		if(!strcmp($category, 'all')){
			$referrerData = Url::join('hits', 'urls.id', '=', 'hits.url_id')
			->whereBetween('hits.created_at', array( $rangeFrom , $rangeTo))
			->select(\DB::raw('count(*) as count, referrers'))
			->groupBy('referrers')
			->get();
		}else{
			$referrerData = Url::join('hits', 'urls.id', '=', 'hits.url_id')->where('category',$category)
			->whereBetween('hits.created_at', array( $rangeFrom , $rangeTo))
			->select(\DB::raw('count(*) as count, referrers'))
			->groupBy('referrers')
			->get();
		}


		//	Build response object
		$res = new \stdClass();
		$res->status = "Success";
		$res->data = $referrerData;
		return response()->json($res, 200);

	}


	/**
	* Returns the url Country analytics data
	*/
	public function getCategoryCountryAnalytics(Request $request, $category){

		$rangeTo = Input::get('t');
		$rangeFrom = Input::get('f');
		//	No use Unit here
		$unit = Input::get('u');


		if(!strcmp($category, 'all')){
			$countryData = Url::join('hits', 'urls.id', '=', 'hits.url_id')
			->whereBetween('hits.created_at', array( $rangeFrom , $rangeTo))->distinct('country_iso_code')
			->select(\DB::raw('count(*) as count, country_iso_code'))
			->groupBy('country_iso_code')
			->get();
		}else{
			$countryData = Url::join('hits', 'urls.id', '=', 'hits.url_id')->where('category',$category)
			->whereBetween('hits.created_at', array( $rangeFrom , $rangeTo))->distinct('country_iso_code')
			->select(\DB::raw('count(*) as count, country_iso_code'))
			->groupBy('country_iso_code')
			->get();
		}


		//response data
		$resultData = array();
		foreach ($countryData as $key => $value) {
			$resultData[$value['country_iso_code']] = $value['count'];
		}

		//	Build response object
		$res = new \stdClass();
		$res->status = "Success";
		$res->data = $resultData;
		return response()->json($res, 200);

	}

	/**
	* Returns the url Country analytics data
	*/
	public function getCategoryCityAnalytics(Request $request, $category){

		$rangeTo = Input::get('t');
		$rangeFrom = Input::get('f');
		//	No use Unit here
		$unit = Input::get('u');


		if(!strcmp($category, 'all')){
			$cityData = Url::join('hits', 'urls.id', '=', 'hits.url_id')
			->whereBetween('hits.created_at', array( $rangeFrom , $rangeTo))
			->select(\DB::raw('count(*) as count, city, country'))
			->groupBy('city')
			->get();
		}else{
			$cityData = Url::join('hits', 'urls.id', '=', 'hits.url_id')->where('category',$category)
			->whereBetween('hits.created_at', array( $rangeFrom , $rangeTo))
			->select(\DB::raw('count(*) as count, city, country'))
			->groupBy('city')
			->get();
		}

		//	Build response object
		$res = new \stdClass();
		$res->status = "Success";
		$res->data = $cityData;
		return response()->json($res, 200);

	}










	/*
	* Return urls from a specific category
	*/
	public function getCotegoryUrls($name, $from, $to){
		if(!$name){
			echo "Invalid Name";
			return;
		}
		$urls = Url::where('category', $name)->take($to)->skip($from)->get();
		echo $urls->toJson();
	}



	/*
	* Return urls count from a specific category
	*/
	public function getCotegoryUrlsCount($name){

		$urls = Url::where('category', $name)->count();
		echo $urls;
	}





	/*
	* Return limited url using only from
	*/
	public function getLimitedUrlsUsingFrom($from){
		$count = Url::count();
		if($count <= $from){
			echo "No more Data found";
			return;
		}
		$limit = $count - $from; // the limit
		$urls = Url::skip($from)->take($limit)->get();
		echo $urls->toJson();
	}




	/**
	* Display a listing of the resource.
	*
	* @return \Illuminate\Http\Response
	*/
	public function index(Request $request){
		$urls = Url::all();

		$res = new \stdClass();
		$res->count = $urls->count();
		foreach ($urls as $key => $value) {
			$value['time'] = $value['created_at']->diffForHumans(Carbon::now());
		}
		$res->status = "success";
		$res->data = $urls;
		echo json_encode($res);
	}






	/**
	* Returns the country analytics
	*/
	public function countryAnalytics(Request $request, $id, $rangeFrom, $rangeTo, $unit){
		$url = Url::find($id);

		if(empty($url)){
			echo 'Not Found';
			return;
		}
		Utility::getUnit($unit);
		$countryData = $url->hits()->whereBetween('created_at', array( $rangeFrom , $rangeTo))
		->select(\DB::raw('count(*) as count, country_iso_code, country'))
		->groupBy('country_iso_code')
		->get();
		echo json_encode($countryData);
		return;

	}







	/**
	* Display the specified resource.
	*
	* @param  int  $id
	* @return \Illuminate\Http\Response
	*/
	public function show($id)
	{
		//
	}

	/**
	* Show the form for editing the specified resource.
	*
	* @param  int  $id
	* @return \Illuminate\Http\Response
	*/
	public function edit($id)
	{
		//
	}

	/**
	* Update the specified resource in storage.
	*
	* @param  \Illuminate\Http\Request  $request
	* @param  int  $id
	* @return \Illuminate\Http\Response
	*/
	public function update(Request $request, $id)
	{
		//
	}

}
