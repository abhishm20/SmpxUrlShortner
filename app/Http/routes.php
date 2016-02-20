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

 Route::get('/generate/{count}', function($count){
 	$hashids = new Hashids('smpx', 6);
 	echo $hashids->encode($count);
 });

 Route::resource ( '/urls', 'UrlController', ['only' => [
    'index', 'show', 'create', 'store', 'edit', 'destroy', 'update']]
 );

 Route::get('/urls/from/{from}/to/{to}', 'UrlController@getLimitedUrls');

 Route::get('/urls/from/{from}', 'UrlController@getLimitedUrlsUsingFrom');

 Route::get('/{shortUrl}', 'UrlController@redirect');

 Route::get('/check', function(Request $request){
 	echo  $_COOKIE["name"];
 	return ;
 });
 Route::get('/demo', function(Request $request){

 	echo setcookie('name', 'value', time() + 10 * 365 * 24 * 3600, "/");
 	setcookie('namasde', 'value', 0, "/");
 	return;
 	//$request->session()->set('token','value of session');
 	//return response('Cookie set!')->withCookie(cookie('name', 'my value', 60),Cookie::make('nasdddddddamfghe', 'asdasdasdmy value', 1260));
 	// try {
 	//
 	// // Generate a version 1 (time-based) UUID object
 	// $uuid1 = Uuid::uuid1();
 	// echo $uuid1; // i.e. e4eaaaf2-d142-11e1-b3e4-080027620cdd
 	// } catch (UnsatisfiedDependencyException $e) {
 	//
 	// // Some dependency was not met. Either the method cannot be called on a
 	// // 32-bit system, or it can, but it relies on Moontoast\Math to be present.
 	// echo 'Caught exception: ' . $e->getMessage() . "\n";
 	//
 	// }


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
