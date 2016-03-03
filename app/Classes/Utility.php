<?php
namespace App\Classes;use Carbon\Carbon;
class Utility{

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
        $tokens = array (
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
