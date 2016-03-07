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
         "styles.css",
     ], 'public/assets/css/everything.css');
     mix.scripts([
         "jquery.min.js",
         "bootstrap.min.js",
         "vue.js",
         "vue-resource.min.js",
         "app.js"
     ], 'public/assets/js/everything.js');
     mix.version(['public/assets/js/everything.js', 'public/assets/css/everything.css']);
 });
