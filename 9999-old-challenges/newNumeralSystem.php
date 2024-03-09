<?php
function newNumeralSystem($letterNumber) {
	$letterToDecimal = ["A" => 0, "B" => 1, "C" => 2, "D" => 3, "E" => 4, "F" => 5, "G" => 6, "H" => 7, "I" => 8, "J" => 9, "K" => 10, "L" => 11, "M" => 12, "N" => 13, "O" => 14, "P" => 15, "Q" => 16, "R" => 17, "S" => 18, "T" => 19, "U" => 20, "V" => 21, "W" => 22, "X" => 23, "Y" => 24, "Z" => 25];
	$decimalToLetter = [0 => "A", 1 => "B", 2 => "C", 3 => "D", 4 => "E", 5 => "F", 6 => "G", 7 => "H", 8 => "I", 9 => "J", 10 => "K", 11 => "L", 12 => "M", 13 => "N", 14 => "O", 15 => "P", 16 => "Q", 17 => "R", 18 => "S", 19 => "T", 20 => "U", 21 => "V", 22 => "W", 23 => "X", 24 => "Y", 25 => "Z" ];
	$numberDecimal =  $letterToDecimal[$letterNumber];
	$loops = round($numberDecimal/2);
	$arrayExercise = [];
	for ($i=0; $i <= $loops ; $i++) {
 		$combination = $decimalToLetter[$i] . " + " . $decimalToLetter[$numberDecimal]; 
		$invertedCombination = $decimalToLetter[$numberDecimal] . " + " . $decimalToLetter[$i]; 
		if(in_array($combination, $arrayExercise) || in_array($invertedCombination, $arrayExercise) || $numberDecimal < 0){
			break;
		}
		$arrayExercise[] = $combination; 
		$numberDecimal --;
	}
	return $arrayExercise;
}
error_log(print_r(newNumeralSystem('G')));


// Your Informatics teacher at school likes coming up with new ways to help you understand the material. When you started studying numeral systems, he introduced his own numeral system, which he's convinced will help clarify things. His numeral system has base 26, and its digits are represented by English capital letters - A for 0, B for 1, and so on.

// The teacher assigned you the following numeral system exercise: given a one-digit number, you should find all unordered pairs of one-digit numbers whose values add up to the number.

// Example
// For number = 'G', the output should be
// newNumeralSystem(number) = ["A + G", "B + F", "C + E", "D + D"].

// Translating this into the decimal numeral system we get: number = 6, so it is ["0 + 6", "1 + 5", "2 + 4", "3 + 3"].

// Input/Output

//     [execution time limit] 4 seconds (php)

//     [input] char number

//     A character representing a correct one-digit number in the new numeral system.

//     Guaranteed constraints:
//     'A' ≤ number ≤ 'Z'.

//     [output] array.string
//         An array of strings in the format "letter1 + letter2", where "letter1" and "letter2" are correct one-digit numbers in the new numeral system. The strings should be sorted by "letter1".

//     Note that "letter1 + letter2" and "letter2 + letter1" are equal pairs and we don't consider them to be different.