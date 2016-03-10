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
 Route::get('/analytics', function(){
   return view('analytics');
 });
 Route::get('/category/analytics', function(){
   return view('categoryAnalytics');
 });

 Route::get('/demo', function(Request $request){
     echo strcmp('a','a');
     return;
 });


 // create New Url and return the saved url data
 Route::post('/url', 'UrlController@create');

 // Returns the total number of available Urls, excluding soft-deleted
 Route::get('/urls/count', 'UrlController@getCount');

 // Returns the total available categories of Url and their count
 Route::get('/urls/categories', 'UrlController@getCategories');

 // Return Category Click analytics Data of an url
 Route::get('/category/{category}/url/analytics/click', 'UrlController@getCategoryClickAnalytics');

 // Return Category Click analytics Data of an url
 Route::get('/category/{category}/url/analytics/platform', 'UrlController@getCategoryPlatformAnalytics');

 // Return Category Click analytics Data of an url
 Route::get('/category/{category}/url/analytics/referrer', 'UrlController@getCategoryReferrerAnalytics');

 // Return Category Click analytics Data of an url
 Route::get('/category/{category}/url/analytics/country', 'UrlController@getCategoryCountryAnalytics');

 // Delete (Soft-Delete) the specified url by id
 Route::get('/url/{id}/delete', 'UrlController@softDelete');

 // Delete (Soft-Delete) the specified url by id
 Route::get('/url/{id}/recover', 'UrlController@recoverUrl');

 // Return Click analytics Data of an url
 Route::get('/url/{id}/analytics/click', 'UrlController@getClickAnalytics');

 // Return platform analytics Data of an url
 Route::get('/url/{id}/analytics/platform', 'UrlController@getPlatformAnalytics');

 // Return platform analytics Data of an url
 Route::get('/url/{id}/analytics/referrer', 'UrlController@getReferrerAnalytics');

 // Return country analytics Data of an url
 Route::get('/url/{id}/analytics/country', 'UrlController@getCountryAnalytics');




 // Returns the total Url data comes within the specified range, with pagination
 Route::get('/urls/{paginateCount}', 'UrlController@getPaginateUrls');


 // create New Url and return the saved url data
 Route::delete('/url/{id}', 'UrlController@softDelete');


 // get url data of given id
 Route::get('/url/{id}', 'UrlController@getUrl');

 // Redirect to original Site
 Route::get('/{shortUrl}', 'UrlController@redirect');



 // Route::get('/urls/{id}/analytics/platform/{rangeFrom}/{rangeTo}/{unit}', 'UrlController@platformAnalytics');
 //  Route::get('/urls/{id}/analytics/referrer/{rangeFrom}/{rangeTo}/{unit}', 'UrlController@referrerAnalytics');




 Route::get('/check', function(Request $request){
 	echo  $_COOKIE["name"];
 	return ;
 });



  Route::get('/generate/{count}', function($count){
  	$hashids = new Hashids('smpx', 6);
  	echo $hashids->encode($count);
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
