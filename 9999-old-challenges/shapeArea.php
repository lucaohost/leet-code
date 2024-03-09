<?php

/*
 * 
 * Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.
 * A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained * by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side byside.
 * You see the 1-, 2-, 3- and 4-interesting polygons in the picture below.
 */
echo("<img src='img/example.png' style='width:50%;height:50%;'>");

function shapeArea($n) {
    $squareArea = (1 + ($n-1) + ($n-1)) * (1 + ($n-1) + ($n-1));
    $cornersArea = 0;
    for($i=$n-1;$i>0;$i--){
        $cornersArea += $i;
    }
    return $squareArea - ($cornersArea * 4); 
}
