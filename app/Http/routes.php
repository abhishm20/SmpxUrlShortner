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
     $time = time();
     echo Utility::getReadableTime($time);
     return;
 });

 Route::get('/generate/{count}', function($count){
 	$hashids = new Hashids('smpx', 6);
 	echo $hashids->encode($count);
 });
Route::get('/urls/city/{ip}', 'UrlController@getState');
Route::get('/urls/{id}/analytics/country/{rangeFrom}/{rangeTo}/{unit}', 'UrlController@countryAnalytics');
Route::get('/urls/categories', 'UrlController@getCategories');
Route::get('/urls/deleted', 'UrlController@getDeleted');
Route::get('/urls/category/{name}', 'UrlController@getCotegoryUrls');

 Route::resource ( '/urls', 'UrlController', ['only' => [
    'index', 'show', 'create', 'store', 'edit', 'update']]
 );


 Route::get('/urls/from/{from}/to/{to}', 'UrlController@getLimitedUrls');

 Route::get('/urls/{id}/analytics/clicks/{rangeFrom}/{rangeTo}/{unit}', 'UrlController@clickAnalytics');
 Route::get('/urls/{id}/analytics/platform/{rangeFrom}/{rangeTo}/{unit}', 'UrlController@platformAnalytics');
  Route::get('/urls/{id}/analytics/referrer/{rangeFrom}/{rangeTo}/{unit}', 'UrlController@referrerAnalytics');
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
