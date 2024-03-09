<?php
// You are given a set of points on the Cartesian plane. 
// Consider the distance between two points as the maximum
// difference of their coordinates. For example, the distance
// between points (1, 2) and (4, 6) is equal to 
// max(|4 - 1|, |6 - 2|) = 4. Given a set of points, find the
// pair with the largest distance and return the value of their
//  distance.

function largestDistance($a) {
    $max1 = max($a);
    deleteValueFromArray($a, $max1);
    $max2 = max($a);
    deleteValueFromArray($a, $max2);
    $min1 = min($a);
    deleteValueFromArray($a, $min1);
    $min2 = min($a);
    deleteValueFromArray($a, $min2);
    $dist1 = $max1 - $min1;
    $dist2 = $max2 - $min2;
    $largestDistance = $dist1 > $dist2 ? $dist1 : $dist2;
    return $largestDistance;
}

function deleteValueFromArray(&$array, $value){
    foreach($array as $key => $valueArray){
        if($valueArray === $value){
            array_splice($array, $key, 1);
            break;
        }
    }
}
