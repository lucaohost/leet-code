<?php
// A string is said to be a correct sentence if it starts with 
// the capital letter and ends with a full stop (.).
// Given a string, check whether it represents a correct sentence.

function isCorrectSentence($inputString)
{
    $characters = str_split($inputString);
    $firstChar = $characters[0];
    $lastChar = array_pop($characters);
    $firstCharIsLetter = ctype_alpha($firstChar);
    $firstCharIsCapital = false;
    if (!$firstCharIsLetter) {
        return false;
    }
    $firstCharIsCapital = strtoupper($firstChar) === $firstChar;
    return $firstCharIsLetter && $firstCharIsCapital && $lastChar === ".";
}
