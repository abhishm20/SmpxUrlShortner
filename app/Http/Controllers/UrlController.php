<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Url;
use App\Http\Controllers\Controller;
use Jenssegers\Agent\Agent;

class UrlController extends Controller
{
	
	/**
	 * Redirect to long url
	 * @return rediect to long url 
	 */
	public function redirect(Request $request, $shortUrl){
		$agent = new Agent();
		$agent->setUserAgent($request->headers);
		
		$urls = Url::where('short_url', '=', $shortUrl)->get();
		if(!is_null($urls))
		{
			echo "Not Found";
			return;
		}
		$url = $urls[0];
		$longUrl = $url['long_url'];
		
		
		$url->clicks = $url['clicks'] +1;
		$url->save();
		$url->hits()->create([
				'language' => $agent->languages()[0],
				'device' => $agent->device(),
				'platform' => $agent->platform(),
				'browser' => $agent->browser()
		]);
		
		//$agent->languages()[0],$agent->device(), $agent->platform(),$agent->browser(),$agent->robot();;;;
		return redirect($url['long_url']);
	}
	
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $urls = Url::all();
        echo $urls->toJson();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
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
        //
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
