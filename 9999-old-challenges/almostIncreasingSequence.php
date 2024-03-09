<?php
/*
 *Given a sequence of integers as an array, determine whether it is possible to obtain a strictly 
 *increasing sequence by removing no more than one element from the array.
 */
$sequence = [1, 2, 1, 2];
almostIncreasingSequence($sequence);

function almostIncreasingSequence($sequence) {
  $numOfChanges = 0;
  $neededChanges = 0;
  foreach($sequence as $key => $number){
    if(isset($prevNumber) && $prevNumber >= $number){
      $numOfChanges++;
      if(array_key_exists($key-2,$sequence) && $sequence[$key-2] >= $number) $neededChanges++;  
      if(array_key_exists($key+1,$sequence) && $prevNumber >= $sequence[$key+1]) $neededChanges++;   
      if($numOfChanges > 1 || $neededChanges > 1) return false;
        $neededChanges = 0;
    }
    $prevNumber = $number;
  }
  if($numOfChanges === 1) return true;
  return false;
}
