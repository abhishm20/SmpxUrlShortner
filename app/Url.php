<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Url extends Model
{
	protected $table = 'urls';
	//public $timestamps = false;
    
	protected $fillable = ['short_url', 'long_url', 'is_active', 'clicks', 'cotegory'];
	
	use SoftDeletingTrait;
	
	protected $dates = ['deleted_at'];
    
	public function hits()
	{
		return $this->hasMany('App\Hit');
	}
}
