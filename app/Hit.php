<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Hit extends Model
{
	protected $table = 'hits';
	//public $timestamps = false;
	protected $fillable = ['language', 'device', 'browser', 'platform', 'time', 'client_ip'];
    //
    
	public function url()
	{
		return $this->belongsTo('App\Url');
	}
}
