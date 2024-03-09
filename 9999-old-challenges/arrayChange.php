<?php
// You are given an array of integers. On each move you are allowed to increase exactly one of 
// its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

// Example

// For inputArray = [1, 1, 1], the output should be
// arrayChange(inputArray) = 3.

// Input/Output

// [execution time limit] 4 seconds (php)

// [input] array.integer inputArray
function arrayChange($inputArray)
{
    $increases = 0;
    $numElements = count($inputArray);
    for ($i = 0; $i < $numElements; $i++) {
        if ($i !== 0 && $inputArray[$i] <= $inputArray[$i - 1]) {
            $minimalNumber = abs($inputArray[$i] - $inputArray[$i - 1]) + 1;
            $inputArray[$i] += $minimalNumber;
            $increases += $minimalNumber;
        }
    }
    return $increases;
}
