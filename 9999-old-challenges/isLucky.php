<?php
error_log(isLucky(1231));
function isLucky($n) {
	$digits = str_split($n);
	$numDigits = count($digits);
	$sumFirstHalf = 0;
	$sumSecondtHalf = 0;
	foreach ($digits as $key => $digit) {
		if($key < $numDigits/2){
			$sumFirstHalf += intval($digit);
		}else{
			$sumSecondtHalf += intval($digit);
			if($sumSecondtHalf > $sumFirstHalf){
				return false;
			}
		}
	}
	if($sumFirstHalf == $sumSecondtHalf){
		return true;
	}
	return false;
}
// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.

// Example

// For n = 1230, the output should be
// isLucky(n) = true;
// For n = 239017, the output should be
// isLucky(n) = false.
// Input/Output

// [execution time limit] 4 seconds (php)

// [input] integer n

// A ticket number represented as a positive integer with an even number of digits.

// Guaranteed constraints:
// 10 ≤ n < 106.

// [output] boolean

// true if n is a lucky ticket number, false otherwise.