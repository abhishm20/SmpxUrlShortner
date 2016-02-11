<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Url extends Model
{
	protected $table = 'urls';
	public $timestamps = false;
    //
    
	public function hits()
	{
		return $this->hasMany('App\Hit');
	}
}
