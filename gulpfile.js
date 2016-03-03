var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

 elixir(function(mix) {
     mix.styles([
         "bootstrap.min.css",
         "jqvmap.css",
         "styles.css",
         "daterangepicker.css"
     ], 'public/assets/css/everything.css');
     mix.scripts([
         "jquery.min.js",
         "bootstrap.min.js",
         "daterangepicker.min.js",
         "canvasjs.min.js",
         "script.js",
         "analytics.js"
     ], 'public/assets/js/everything.js');
 });
