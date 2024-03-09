<?php
// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

// Example

// For

// picture = ["abc",
//            "ded"]
// the output should be

// addBorder(picture) = ["*****",
//                       "*abc*",
//                       "*ded*",
//                       "*****"]

function addBorder($picture)
{
    $sizeWithBorder = strlen($picture[0]) + 2;
    $fullBorder = str_pad("", $sizeWithBorder, "*", STR_PAD_BOTH);
    foreach ($picture as &$row) {
        $row = str_pad($row, $sizeWithBorder, "*", STR_PAD_BOTH);
    }
    array_unshift($picture, $fullBorder);
    $picture[] = $fullBorder;
    return $picture;
}

var_dump(addBorder(["abc", "ded"]));
