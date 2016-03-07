<?php
namespace App\Classes;

use Carbon\Carbon;
use App\Url;
use GeoIp2\Database\Reader;

class Utility{

    const HTTP_CODES = array(
        100 => 'Continue',
        101 => 'Switching Protocols',
        102 => 'Processing',
        200 => 'OK',
        201 => 'Created',
        202 => 'Accepted',
        203 => 'Non-Authoritative Information',
        204 => 'No Content',
        205 => 'Reset Content',
        206 => 'Partial Content',
        207 => 'Multi-Status',
        300 => 'Multiple Choices',
        301 => 'Moved Permanently',
        302 => 'Found',
        303 => 'See Other',
        304 => 'Not Modified',
        305 => 'Use Proxy',
        306 => 'Switch Proxy',
        307 => 'Temporary Redirect',
        400 => 'Bad Request',
        401 => 'Unauthorized',
        402 => 'Payment Required',
        403 => 'Forbidden',
        404 => 'Not Found',
        405 => 'Method Not Allowed',
        406 => 'Not Acceptable',
        407 => 'Proxy Authentication Required',
        408 => 'Request Timeout',
        409 => 'Conflict',
        410 => 'Gone',
        411 => 'Length Required',
        412 => 'Precondition Failed',
        413 => 'Request Entity Too Large',
        414 => 'Request-URI Too Long',
        415 => 'Unsupported Media Type',
        416 => 'Requested Range Not Satisfiable',
        417 => 'Expectation Failed',
        418 => 'I\'m a teapot',
        422 => 'Unprocessable Entity',
        423 => 'Locked',
        424 => 'Failed Dependency',
        425 => 'Unordered Collection',
        426 => 'Upgrade Required',
        449 => 'Retry With',
        450 => 'Blocked by Windows Parental Controls',
        500 => 'Internal Server Error',
        501 => 'Not Implemented',
        502 => 'Bad Gateway',
        503 => 'Service Unavailable',
        504 => 'Gateway Timeout',
        505 => 'HTTP Version Not Supported',
        506 => 'Variant Also Negotiates',
        507 => 'Insufficient Storage',
        509 => 'Bandwidth Limit Exceeded',
        510 => 'Not Extended'
    );



    /*
    * Return city of an ip
    */
    public static function getCity($ip){
        $reader = new Reader(config('app.ipdb'));
    	$record = $reader->city($ip);
    	return $record->city->name;
    }
    /*
    * Return state of an ip
    */
    public static function getState($ip){
        $reader = new Reader(config('app.ipdb'));
    	$record = $reader->city($ip);
    	return $record->mostSpecificSubdivision->name;
    }
    /*
    * Return country iso code of an ip
    */
    public static function getCountryIsoCode($ip){
        $reader = new Reader(config('app.ipdb'));
    	$record = $reader->city($ip);
    	return $record->country->isoCode;
    }

    /*
    * Return country name of an ip
    */
    public static function getCountry($ip){
        $reader = new Reader(config('app.ipdb'));
    	$record = $reader->city($ip);
    	return $record->country->name;
    }

    // Builds the Error Object and returns it
    public static function getError($exception, $code, $name, $message){
        $error = new \stdClass();

        if(isset($exception)){

        }
        $error->name = $name;
        $error->message = $message;
        $error->code = $code;
        $error->status = self::HTTP_CODES[$code];
        return $error;
    }

    //  returns the sorting data based on given sorting parameter
    public static function getSortData($sortCol, $givenSortDesc, $givenSortAsc){
        //  Default value, when there is no any sorting criteria
        $defaultSortCol = Url::CREATED_AT;
        $defaultSortType = 'DESC';

        //  check col for empty and set the default value
        if(isset($sortCol) && trim($sortCol) !== ''){
            if(!strcasecmp($sortCol, 'time')){
                $defaultSortCol =  Url::CREATED_AT;
            }else if(!strcasecmp($sortCol, 'hits')){
                $defaultSortCol =  Url::CLICKS;
            }else if(!strcasecmp($sortCol, 'ctgry')){
                $defaultSortCol =  Url::CATEGORY;
            }
        }

        //  check sorting type for empty and set the default value
        if(isset($givenSortDesc) && $givenSortDesc == 1){
            $defaultSortType = 'DESC';
        }else if(isset($givenSortAsc) && $givenSortAsc == 1){
            $defaultSortType = 'ASC';
        }

        $sortData = new \stdClass();
        $sortData->sortCol = $defaultSortCol;
        $sortData->sortType = $defaultSortType;

        return $sortData;
    }

    // returns human readable tim difference
    public static function getReadableTime($timestamp){
        // Get time difference and setup arrays
        $difference = time() - $timestamp;

        $periods = array("second", "minute", "hour", "day", "week", "month", "years");
        $lengths = array("60","60","24","7","4.35","12");

        // Past or present
        if ($difference >= 0){
            $ending = "ago";
        }
        else{
            $difference = -$difference;
            $ending = "to go";
        }

        // Figure out difference by looping while less than array length
        // and difference is larger than lengths.
        $arr_len = count($lengths);
        for($j = 0; $j < $arr_len && $difference >= $lengths[$j]; $j++){
            $difference /= $lengths[$j];
        }

        // Round up
        $difference = round($difference);

        // Make plural if needed
        if($difference != 1){
            $periods[$j].= "s";
        }

        // Default format
        $text = "$difference $periods[$j] $ending";

        // over 24 hours
        if($j > 2){
            // future date over a day formate with year
            if($ending == "to go"){
                if($j == 3 && $difference == 1){
                    $text = "Tomorrow at ". date("g:i a", $timestamp);
                }
                else{
                    $text = date("F j, Y \a\\t g:i a", $timestamp);
                }
                return $text;
            }

            if($j == 3 && $difference == 1){
                $text = "Yesterday at ". date("g:i a", $timestamp);
            }
            else if($j == 3){
                $text = date("l \a\\t g:i a", $timestamp);
            }
            else if($j < 6 && !($j == 5 && $difference == 12)){
                $text = date("F j \a\\t g:i a", $timestamp);
            }
            else{
                $text = date("F j, Y \a\\t g:i a", $timestamp);
            }
        }

        return $text;
    }

    public static function getUnit($unit){
        $GLOBALS['filter'] = 'D';
        if(!empty($unit)){
            if($unit == 'date'){
                $GLOBALS['filter'] = 'd';
            }else if($unit == 'month'){
                $GLOBALS['filter'] = 'M';
            }else if($unit == 'week'){
                $GLOBALS['filter'] = 'D';
            }else if($unit == 'year'){
                $GLOBALS['filter'] = 'Y';
            }else if($unit == 'hour'){
                $GLOBALS['filter'] = 'h';
            }else if($unit == 'minute'){
                $GLOBALS['filter'] = 'i';
            }else if($unit == 'second'){
                $GLOBALS['filter'] = 's';
            }else{
                $GLOBALS['filter'] = 'M';
            }
        }
    }

    /*
    * Return Elapsed time by giving a $time
    */
    public static function humanTiming ($time){
        $time = time() - $time; // to get the time since that moment
        $time = ($time<1)? 1 : $time;
        $tokens = array(
            31536000 => 'year',
            2592000 => 'month',
            604800 => 'week',
            86400 => 'day',
            3600 => 'hour',
            60 => 'minute',
            1 => 'second'
        );
        foreach ($tokens as $unit => $text){
            if ($time < $unit) continue;
            $numberOfUnits = floor($time / $unit);
            return $numberOfUnits.' '.$text.(($numberOfUnits>1)?'s':'');
        }
    }
}
?>
