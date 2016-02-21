<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Url extends Model
{
	protected $table = 'urls';
	//public $timestamps = false;

	protected $fillable = ['short_url', 'long_url', 'is_active', 'clicks', 'cotegory'];

	use SoftDeletes;
	protected $dates = ['deleted_at'];

	public function hits()
	{
		return $this->hasMany('App\Hit');
	}
}
