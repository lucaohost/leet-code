<?php

function isLucky($number) {
    $stringNumber = (string) $number;
    $arrayNumbers = str_split($stringNumber);
    $sumFirstHalf = 0;
    $sumSecondHalf = 0;
    $half = floor(count($arrayNumbers) / 2);
    foreach($arrayNumbers as $key => $number){
        $beforeHalf = $key >= $half;
        if($beforeHalf){
            $sumFirstHalf += $number;
        }else{
            $sumSecondHalf += $number;
        }
    }
    return $sumFirstHalf === $sumSecondHalf;
}

// Ticket numbers usually consist of an even number of digits. 
// A ticket number is considered lucky if the sum of the first 
// half of the digits is equal to the sum of the second half.
// Given a ticket number n, determine if it's lucky or not.
// Example
// For n = 1230, the output should be
// isLucky(n) = true;
// For n = 239017, the output should be
// isLucky(n) = false.