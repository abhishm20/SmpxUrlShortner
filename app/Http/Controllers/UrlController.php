<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Hashids\Hashids;
use App\Url;
use App\Http\Controllers\Controller;
use Jenssegers\Agent\Agent;
use PhpParser\Node\Expr\Cast\Object_;
use Ramsey\Uuid\Uuid;
use Ramsey\Uuid\Exception\UnsatisfiedDependencyException;
use Carbon\Carbon;
class UrlController extends Controller
{


	/*
	* Return Elapsed time by giving a $time
	*/

	private function humanTiming ($time){
		$time = time() - $time; // to get the time since that moment
		$time = ($time<1)? 1 : $time;
		$tokens = array (
		31536000 => 'year',
		2592000 => 'month',
		604800 => 'week',
		86400 => 'day',
		3600 => 'hour',
		60 => 'minute',
		1 => 'second'
	);

	foreach ($tokens as $unit => $text) {
		if ($time < $unit) continue;
		$numberOfUnits = floor($time / $unit);
		return $numberOfUnits.' '.$text.(($numberOfUnits>1)?'s':'');
	}
}

/*
* Return limited url range $from $to
*/
public function getLimitedUrls($from, $to){
	if($from > $to){
		echo "Invalid Query";
		return;
	}
	$urls = Url::take($to)->skip($from)->get();
	echo $urls->toJson();
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
* Redirect to long url
* @return rediect to long url
*/
public function redirect(Request $request, $shortUrl){
	$agent = new Agent();
	$agent->setUserAgent($request->headers);

	$urls = Url::where('short_url', '=', config('app.url'). '/' . $shortUrl)->get();
	if(!$urls->first())
	{
		echo "Not Found";
		return;
	}
	$url = $urls[0];
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
		// Some dependency was not met. Either the method cannot be called on a
		// 32-bit system, or it can, but it relies on Moontoast\Math to be present.
		echo 'Caught exception: ' . $e->getMessage() . "\n";
	}
	$httpReferrer = '';
	if(!empty($_SERVER['HTTP_REFERER']))
		$httpReferrer = $_SERVER['HTTP_REFERER'];

	$url->clicks = $url['clicks'] +1;
	$url->save();
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
	]);

	$shortQuery = $request->all();

	$parsedLongUrl = parse_url($longUrl);

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
* Display a listing of the resource.
*
* @return \Illuminate\Http\Response
*/
public function index(Request $request){
	$urls = Url::all();
	$res = new \stdClass();
	$res->count = $urls->count();
	$res->status = "success";
	$res->data = $urls;
	echo json_encode($res);
}


/**
* Returns the url Clicks analytics data
*/
public function clickAnalytics(Request $request, $id, $rangeFrom, $rangeTo, $unit){

	$url = Url::find($id);
	if(empty($url)){
		echo 'Not Found';
		return;
	}
	$GLOBALS['filter'] = 'D';
	if(!empty($unit)){
		if($unit == 'date'){
			$GLOBALS['filter'] = 'd';
		}else if($unit == 'month'){
			$GLOBALS['filter'] = 'M';
		}else if($unit == 'week'){
			$GLOBALS['filter'] = 'D';
		}else if($unit == 'year'){
			$GLOBALS['filter'] = 'Y';
		}else if($unit == 'hour'){
			$GLOBALS['filter'] = 'h';
		}else if($unit == 'minute'){
			$GLOBALS['filter'] = 'i';
		}else if($unit == 'second'){
			$GLOBALS['filter'] = 's';
		}else{
			$GLOBALS['filter'] = 'M';
		}
	}
	$clickSessionCount= $url->hits()->whereBetween('created_at', array( $rangeFrom , $rangeTo))
	->distinct('session_id')->count('session_id');
	$clickCookieCount= $url->hits()->whereBetween('created_at', array( $rangeFrom , $rangeTo))
	->distinct('session_id')->count('cookie_id');
	$clickTotalCount= $url->hits()->whereBetween('created_at', array( $rangeFrom , $rangeTo))
	->count('id');

	$clickSessionData = $url->hits()->whereBetween('created_at', array( $rangeFrom , $rangeTo))
	->select(\DB::raw('created_at, session_id'))->get()
	->groupBy(function($date) {
        return Carbon::parse($date->created_at)->format($GLOBALS['filter']); // grouping by years
	});
	// echo json_encode($clickSessionData);
	// return;
	$clickUserData = $url->hits()->whereBetween('created_at', array( $rangeFrom , $rangeTo))
	->select(\DB::raw('created_at, cookie_id'))->get()
	->groupBy(function($date) {
        return Carbon::parse($date->created_at)->format($GLOBALS['filter']); // grouping by years
	});

	$clickTotalData = $url->hits()->whereBetween('created_at', array( $rangeFrom , $rangeTo))
	->select(\DB::raw('created_at'))->get()
	->groupBy(function($date) {
        return Carbon::parse($date->created_at)->format($GLOBALS['filter']); // grouping by years
	});
	$clickResult = array(array());
	$clickSessionResult = array();
	$clickUserResult = array();
	$clickTotalResult = array();
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
	$clickResult['sessionCount'] = $clickSessionCount;
	$clickResult['cookieCount'] = $clickCookieCount;
	$clickResult['totalCount'] = $clickTotalCount;
	unset($clickResult[0]);
	echo json_encode($clickResult);
	return;
}

/**
* Returns the url Platform analytics data
*/
public function platformAnalytics(Request $request, $id, $rangeFrom, $rangeTo, $unit){
	$url = Url::find($id);

	if(empty($url)){
		echo 'Not Found';
		return;
	}

	$GLOBALS['filter'] = 'D';

	if(!empty($range)){
		if($range == 'day'){
			$GLOBALS['filter'] = 'd';
		}else if($range == 'month'){
			$GLOBALS['filter'] = 'M';
		}else if($range == 'week'){
			$GLOBALS['filter'] = 'D';
		}else if($range == 'year'){
			$GLOBALS['filter'] = 'Y';
		}else if($range == 'hour'){
			$GLOBALS['filter'] = 'h';
		}else if($range == 'minute'){
			$GLOBALS['filter'] = 'i';
		}else if($range == 'second'){
			$GLOBALS['filter'] = 's';
		}else{
			$GLOBALS['filter'] = 'M';
		}
	}

	$platformData = $url->hits()->whereBetween('created_at', array( $rangeFrom , $rangeTo))
	->select(\DB::raw('count(*) as count, platform'))
  	->groupBy('platform')
  	->get();
	echo json_encode($platformData);
	return;

}


/**
* Show the form for creating a new resource.
*
* @return \Illuminate\Http\Response
*/
public function create(Request $request){
	echo "done";
	//
}


/**
* Remove the specified resource from storage.
*
* @param  int  $id
* @return \Illuminate\Http\Response
*/
public function destroy($id)
{
	$url = Url::find($id);
	if(empty($url)){
		echo 'Not Found';
		return;
	}
	$url->delete($id);
	echo $id;
	return;
}

/**
* Store a newly created resource in storage.
*
* @param  \Illuminate\Http\Request  $request
* @return \Illuminate\Http\Response
*/
public function store(Request $request)
{
	$count = Url::max('id');
	if(!isset($count))
	$count = 0;

	if(empty($request["customKey"])){
		$hashids = new Hashids('smpx', 6);
		$hashed_url = $hashids->encode($count++);
	}else{
		$hashed_url = $request["customKey"];
	}

	$longUrl = trim($request["long_url"]);

	if(strlen($longUrl) <= 0){
		echo 'Invalid Url';
		return;
	}
	if(substr( $longUrl, 0, 7 ) !== "http://" and substr( $longUrl, 0, 8 ) !== "https://"){
		$longUrl = 'http://' . $longUrl ;
	}

	$array = array(
		'long_url' => $longUrl,
		'short_url' => config('app.url'). '/' . $hashed_url,
		'is_active' => true,
		'clicks' => 0,
		'cotegory' => $request["cotegory"]
	);
	$urlInstance = Url::create($array);
	echo $urlInstance->toJson();
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
