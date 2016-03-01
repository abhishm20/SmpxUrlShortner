<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHitsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hits', function (Blueprint $table) {
            $table->increments('id');
            $table->string('platform');
            $table->string('device');
            $table->timestamp('created_at');
            $table->timestamp('updated_at');
            $table->string('browser');
            $table->string('language');
            $table->string('cookie_id');
            $table->string('session_id');
            $table->string('client_ip');
            $table->string('user_agent');
            $table->string('referrers');
            $table->string('remote_addr');
            $table->string('remote_port');
            $table->string('remote_method');
            $table->string('city');
            $table->string('state');
            $table->string('country');
            $table->string('country_iso_code');
            $table->integer('url_id');
            $table->index('url_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('hits');
    }
}
