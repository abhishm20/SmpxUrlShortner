<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletingTrait;
class Url extends Model
{
	protected $table = 'urls';
	//public $timestamps = false;

	protected $fillable = ['short_url', 'long_url', 'is_active', 'clicks', 'cotegory'];


	protected $dates = ['deleted_at'];

	public function hits()
	{
		return $this->hasMany('App\Hit');
	}
}
