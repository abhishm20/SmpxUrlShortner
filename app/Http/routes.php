<?php
use Hashids\Hashids;
use Illuminate\Http\Request;


/*
 * |--------------------------------------------------------------------------
 * | Routes File
 * |--------------------------------------------------------------------------
 * |
 * | Here is where you will register all of the routes in an application.
 * | It's a breeze. Simply tell Laravel the URIs it should respond to
 * | and give it the controller to call when that URI is requested.
 * |
 */

 Route::get('/', function(){
 	return view('index');
 });

 Route::get('/demo', function(Request $request){
     $country=file_get_contents('http://api.hostip.info/get_html.php?ip=216.58.203.78');
     echo $country;
     return;
 });

 Route::get('/generate/{count}', function($count){
 	$hashids = new Hashids('smpx', 6);
 	echo $hashids->encode($count);
 });

 Route::resource ( '/urls', 'UrlController', ['only' => [
    'index', 'show', 'create', 'store', 'edit', 'update']]
 );

 Route::get('/urls/from/{from}/to/{to}', 'UrlController@getLimitedUrls');

 Route::get('/urls/{id}/analytics/clicks/{rangeFrom}/{rangeTo}/{unit}', 'UrlController@clickAnalytics');
 Route::get('/urls/{id}/analytics/platform/{rangeFrom}/{rangeTo}/{unit}', 'UrlController@platformAnalytics');
 Route::get('/urls/{id}/delete', 'UrlController@destroy');

 Route::get('/urls/from/{from}', 'UrlController@getLimitedUrlsUsingFrom');

 Route::get('/{shortUrl}', 'UrlController@redirect');

 Route::get('/check', function(Request $request){
 	echo  $_COOKIE["name"];
 	return ;
 });


/*
 * |--------------------------------------------------------------------------
 * | Application Routes
 * |--------------------------------------------------------------------------
 * |
 * | This route group applies the "web" middleware group to every route
 * | it contains. The "web" middleware group is defined in your HTTP
 * | kernel and includes session state, CSRF protection, and more.
 * |
 */

Route::group(['middleware' => ['web']], function () {

} );
