<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUrlsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('urls', function (Blueprint $table) {
            $table->increments('id');
            $table->string('short_url');
            $table->string('long_url');
            $table->timestamp('created_at');
            $table->timestamp('updated_at');
            $table->boolean('is_active');
            $table->bigInteger('clicks');
            $table->string('category');
            $table->softDeletes();

            $table->unique('short_url');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('urls');
    }
}
