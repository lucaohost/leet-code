<?php
// Given a string, find out if its characters can be rearranged to form a palindrome.

// Example

// For inputString = "aabb", the output should be
// palindromeRearranging(inputString) = true.

// We can rearrange "aabb" to make "abba", which is a palindrome.

// Input/Output

// [execution time limit] 4 seconds (php)

// [input] string inputString

// A string consisting of lowercase English letters.

// Guaranteed constraints:
// 1 ≤ inputString.length ≤ 50.

// [output] boolean

// true if the characters of the inputString can be rearranged to form a palindrome, false otherwise.

function palindromeRearranging($inputString)
{
    $lettersQty = [];
    $arrayChars = str_split($inputString);
    foreach ($arrayChars as $key => $char) {
        if (!key_exists($char, $lettersQty)) {
            $lettersQty[$char] = 1;
        } else {
            $lettersQty[$char]++;
        }
    }
    $oddLetters = 0;
    foreach ($lettersQty as $letterQty) {
        if ($letterQty % 2 !== 0) {
            $oddLetters++;
            if ($oddLetters > 1) {
                return false;
            }
        }
    }
    return true;
}