<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Hashids\Hashids;
use App\Url;
use App\Http\Controllers\Controller;
use Jenssegers\Agent\Agent;
use PhpParser\Node\Expr\Cast\Object_;

class UrlController extends Controller
{
	
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
		
		
		$url->clicks = $url['clicks'] +1;
		$url->save();
		$url->hits()->create([
				'client_ip' => $_SERVER['REMOTE_ADDR'],
				'language' => $agent->languages()[0],
				'device' => $agent->device(),
				'platform' => $agent->platform(),
				'browser' => $agent->browser()
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
    public function index(Request $request)
    {
        $urls = Url::all();
        $res = new \stdClass();
        $res->count = $urls->count();
        $res->status = "success";
        $res->data = $urls;
        echo json_encode($res);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
    	echo "done";
    	//
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
    	
    	$hashids = new Hashids('smpx', 6);
    	$hashed_url = $hashids->encode($count++);
    	
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
    			'clicks' => 0
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

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
