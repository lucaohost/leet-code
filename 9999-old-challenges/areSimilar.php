<?php
// Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

// Given two arrays a and b, check whether they are similar.

// Example

// For a = [1, 2, 3] and b = [1, 2, 3], the output should be
// areSimilar(a, b) = true.

// The arrays are equal, no need to swap any elements.

// For a = [1, 2, 3] and b = [2, 1, 3], the output should be
// areSimilar(a, b) = true.

// We can obtain b from a by swapping 2 and 1 in b.

// For a = [1, 2, 2] and b = [2, 1, 1], the output should be
// areSimilar(a, b) = false.

// Any swap of any two elements either in a or in b won't make a and b equal.

function areSimilar($a, $b)
{
    $numElements = count($a);
    $diffs = 0;
    $toChangeA = [];
    $toChangeB = [];
    for ($i = 0; $i < $numElements; $i++) {
        if ($a[$i] != $b[$i]) {
            $diffs++;
            if ($diffs > 2) {
                return false;
            }
            $toChangeA[] = $a[$i];
            $toChangeB[] = $b[$i];
        }
    }
    return count(array_diff($toChangeA, $toChangeB)) === 0;
}

var_dump(areSimilar([1, 2, 3], [2, 1, 3]));
