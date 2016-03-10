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

     // Style for Index page
     mix.styles([
         "bootstrap.min.css",
         "styles.css",
     ], 'public/assets/css/index.css');

     // Scripts for Index page
     mix.scripts([
         "jquery.min.js",
         "bootstrap.min.js",
         "vue.js",
         "vue-resource.min.js",
         "app.js"
     ], 'public/assets/js/index.js');

     // Styles for analytics page
     mix.styles([
         "bootstrap.min.css",
         "styles.css",
         "daterangepicker.css",
         "morris.css",
         "jqvmap.css"
     ], 'public/assets/css/analytics.css');

     // Scripts for analytics page
     mix.scripts([
         "jquery.min.js",
         "bootstrap.min.js",
         "moment.min.js",
         "daterangepicker.min.js",
         "canvasjs.min.js",
         "jquery.vmap.min.js",
         "jquery.vmap.world.js",
         "vue.js",
         "vue-resource.min.js",
         "analytics.js"
     ], 'public/assets/js/analytics.js');

     // Styles for analytics page
     mix.styles([
         "bootstrap.min.css",
         "styles.css",
         "daterangepicker.css",
         "morris.css",
         "jqvmap.css"
     ], 'public/assets/css/catAnalytics.css');

     // Scripts for analytics page
     mix.scripts([
         "jquery.min.js",
         "bootstrap.min.js",
         "moment.min.js",
         "daterangepicker.min.js",
         "canvasjs.min.js",
         "jquery.vmap.min.js",
         "jquery.vmap.world.js",
         "vue.js",
         "vue-resource.min.js",
         "catAnalytics.js"
     ], 'public/assets/js/catAnalytics.js');

     // Version css and js of both pages
     mix.version(['public/assets/js/index.js', 'public/assets/css/index.css', 'public/assets/js/analytics.js', 'public/assets/css/analytics.css'
        , 'public/assets/js/catAnalytics.js', 'public/assets/css/catAnalytics.css']);
 });
