<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Url extends Model
{
	protected $table = 'urls';
	//public $timestamps = false;

	protected $fillable = ['short_url', 'long_url', 'is_active', 'clicks', 'category'];

	use SoftDeletes;
	protected $dates = ['deleted_at'];


	// Constants for Column used in Utility Class for managing sorting criteria
	const CLICKS = 'clicks';
	const CREATED_AT = 'created_at';
	const CATEGORY = 'category';

	public function hits()
	{
		return $this->hasMany('App\Hit');
	}
}
