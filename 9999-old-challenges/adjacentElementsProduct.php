<?php

/*
 * Given an array of integers, find the pair of adjacent elements that has the 
 * largest product and return that product
 */
adjacentElementsProduct([-23, 4, -3, 8, -12]);

function adjacentElementsProduct($inputArray) {
    $largestProduct = $inputArray[0] * $inputArray[1];
    $sizeArray = count($inputArray) - 1;
    for ($i=0; $i<$sizeArray; $i++) {       
        if ($inputArray[$i] * $inputArray[$i + 1] > $largestProduct) {
            $largestProduct = $inputArray[$i] * $inputArray[$i + 1];
        }
    }
    return $largestProduct;
}
