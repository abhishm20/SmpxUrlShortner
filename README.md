# smpx_to
URL Shortener Service of Smartprix




# Configuration of GeoIP

1. Goto config/app.php
2. set ipdb to the location of City GeoIP DB <br />
eg: 'ipdb' => env('IP_DB', '<Relative Path>/GeoIp/GeoLite2-City.mmdb')


# Configuration of Hostname

1. Goto config/app.php
2. set url to the location of the Hostname <br />
eg: 'url' => 'http://brainboxapp.com:8000'


# Configuration of Mysql Database

1. Goto /.env
2. set followings as required: <br />
    DB_HOST=127.0.0.1
    DB_DATABASE=smpxto
    DB_USERNAME=root
    DB_PASSWORD=ainaa
