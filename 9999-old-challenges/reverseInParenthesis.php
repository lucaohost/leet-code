<?php

// Write a function that reverses characters in (possibly nested) parentheses in the input string.
// Input strings will always be well-formed with matching ()s.
// Example
// For inputString = "(bar)", the output should be
// reverseInParentheses(inputString) = "rab";
// For inputString = "foo(bar)baz", the output should be
// reverseInParentheses(inputString) = "foorabbaz";
// For inputString = "foo(bar)baz(blim)", the output should be
// reverseInParentheses(inputString) = "foorabbazmilb";
// For inputString = "foo(bar(baz))blim", the output should be
// reverseInParentheses(inputString) = "foobazrabblim".
// Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".

function reverseInParentheses($inputString)
{
    $arraysChars = str_split($inputString);
    return reverseStringsBetweenParenthesis($arraysChars);
}

function reverseStringsBetweenParenthesis(&$arraysChars, $pos = 0)
{
    $numChars = count($arraysChars);
    $newWord = "";
    for ($i = $pos; $i < $numChars; $i++) {
        $currentChar = $arraysChars[$i];
        $arraysChars[$i] = null;
        if ($currentChar === "(") {
            $newWord .= reverseStringsBetweenParenthesis($arraysChars, ++$i);
            continue;
        }
        if ($currentChar === ")") {
            return strrev($newWord);
        }
        empty($currentChar) ?: $newWord .= $currentChar;
    }
    return $newWord;
}

echo reverseInParentheses("foo(bar(baz))blim");
