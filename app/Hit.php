<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Hit extends Model
{
	protected $table = 'hits';
	//public $timestamps = false;
	protected $fillable = ['language', 'device', 'browser', 'platform', 'time', 'client_ip',
	 						'session_id', 'cookie_id', 'country', 'state', 'city', 'user_agent', 'referrers',
							 'remote_method', 'country_iso_code', 'remote_addr', 'remote_port'];
    //

	public function url()
	{
		return $this->belongsTo('App\Url');
	}
}
