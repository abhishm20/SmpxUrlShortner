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


 // create New Url and return the saved url data
 Route::post('/url', 'UrlController@create');


 // Returns the total number of available Urls, excluding soft-deleted
 Route::get('/urls/count', 'UrlController@getCount');


 // Returns the total available categories of Url and their count
 Route::get('/urls/categories', 'UrlController@getCategories');


 // Returns the all soft-deleted Urls, with pagination
 //Route::get('/urls/deleted/{paginateCount}', 'UrlController@getPaginateDeleted');


 // Delete (Soft-Delete) the specified url by id
 Route::get('/url/{id}/delete', 'UrlController@softDelete');


 // Returns the total Url data comes within the specified range, with pagination
 Route::get('/urls/{paginateCount}', 'UrlController@getPaginateUrls');


 // create New Url and return the saved url data
 Route::delete('/url/{id}', 'UrlController@softDelete');


 // Redirect to original Site
 Route::get('/{shortUrl}', 'UrlController@redirect');



 //
 // Route::get('/urls/{id}/analytics/clicks/{rangeFrom}/{rangeTo}/{unit}', 'UrlController@clickAnalytics');
 // Route::get('/urls/{id}/analytics/platform/{rangeFrom}/{rangeTo}/{unit}', 'UrlController@platformAnalytics');
 //  Route::get('/urls/{id}/analytics/referrer/{rangeFrom}/{rangeTo}/{unit}', 'UrlController@referrerAnalytics');




 Route::get('/check', function(Request $request){
 	echo  $_COOKIE["name"];
 	return ;
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
