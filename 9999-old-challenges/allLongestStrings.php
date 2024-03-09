<?php
// Given an array of strings, return another array containing all 
// of its longest strings. Example, for inputArray = ["aba", "aa",
// "ad", "vcd", "aba"], the output should be  
// allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

function allLongestStrings($arrayOfStrings) {
    $longestStrings = [array_shift($arrayOfStrings)];
    foreach($arrayOfStrings as $string){
        $sizeString = strlen($string);
        $sizeLongestString = strlen($longestStrings[0]);
        if($sizeString > $sizeLongestString){
            $longestStrings = [$string];
        }
        if($sizeString === $sizeLongestString){
            $longestStrings[] = $string;
        }
    }
    return $longestStrings;
}
