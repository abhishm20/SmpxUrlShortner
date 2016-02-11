<?php
use Hashids\Hashids;
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

Route::get('/generate/{count}', function($count){
	$hashids = new Hashids('smpx', 6);
	echo $hashids->encode($count);
});

Route::resource ( '/urls', 'UrlController', ['only' => [
    'index', 'show', 'create', 'store', 'edit', 'destroy', 'update']]
);

Route::get ( '/{shortUrl}', 'UrlController@redirect');

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
