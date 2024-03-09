<?php
function reverseInterference($originalA, $originalB, $broadcastA, $broadcastB) {
    $sizeWaves = strlen($originalA);
    $consecutive = 0;
    $moves = 0;
    for($i = 0; $i < $sizeWaves; $i++){
        if($broadcastA[$i] === $originalA[$i] && $broadcastB[$i] === $originalB[$i]){
            $consecutive = 0;
            continue;
        }else if($broadcastA[$i] === $originalB[$i] && $broadcastB[$i] === $originalA[$i]){
            if($consecutive === 0){
                $moves++;
            }
            $consecutive++;
            if($consecutive === 3){
                $consecutive = 0;
            }
            continue;
        }else{
            return -1;
        }
    }
    return $moves;
}

$originalA  = "ACCCC";
$broadcastA = "ABBBB";
$originalB  = "ABBBB";
$broadcastB = "ACCCC";
error_log(reverseInterference($originalA,$originalB,$broadcastA,$broadcastB));
?>
<!-- Two sets of radio waves were broadcast near each other, with the same wavelength. Both broadcasts are represented as strings of uppercase English letters, of equal length.

Since the two broadcasts may have interfered, some of the letters may have been swapped. There could have also been external interference that caused some of the letters to be corrupted.

You've been called in to investigate the interference, so you've been supplied with some test data. Specifically, you're given both of the original broadcasts, as well as both of the received broadcasts, and your task is to find the minimum number of swaps required to restore them.

    You may only swap characters of equal index; in other words, broadcastA[i] can be swapped with broadcastB[j] only if i = j.
    If there are multiple consecutive characters that need to be swapped, up to three of them can be done in one move.
    If the original broadcasts can't be restored by a series of swaps, return -1.

Example

    For

    originalA  = "ABAB"
    originalB  = "CDCD"

    broadcastA = "CDAD"
    broadcastB = "ABCB"

    the output should be reverseInterference(originalA, originalB, broadcastA, broadcastB) = 2.

    The characters at indices 0, 1, and 3 have all been swapped. Both 0 and 1 can be swapped back in one move, since they're consecutive characters, not exceeding 3 in a row. After that, one more swap will be needed for character 3, for a total of 2 swaps.

    For

    originalA  = "ABCDEF"
    originalB  = "ZYXWVU"

    broadcastA = "AYXWVU"
    broadcastB = "ZBCDEF"

    the output should be reverseInterference(originalA, originalB, broadcastA, broadcastB) = 2.

    From index 1 to index 5, there are five consecutive characters that need to be swapped. Since there are more than 3 in a row, we'll need to split them up into a group of 3 and a group of 2, so it'll take 2 swaps at least.

    For

    originalA  = "A"
    originalB  = "Z"

    broadcastA = "X"
    broadcastB = "A"

    the output should be reverseInterference(originalA, originalB, broadcastA, broadcastB) = -1.

    Even after swapping the characters, the broadcasts won't match the original, so it's not possible for them to be restored. So we return -1.

Input / Output

    [execution time limit] 4 seconds (php)

    [input] string originalA

    A string of uppercase English letters representing the first original broadcast.

    Guaranteed constraints:
    0 ≤ originalA.length ≤ 105

    [input] string originalB

    A string of uppercase English letters representing the second original broadcast.

    Guaranteed constraints:
    originalB.length = originalA.length

    [input] string broadcastA

    A string of uppercase English letters representing the interfered first broadcast.

    Guaranteed constraints:
    broadcastA.length = originalA.length

    [input] string broadcastB

    A string of uppercase English letters representing the interfered second broadcast.

    Guaranteed constraints:
    broadcastB.length = originalA.length

    [output] integer
        The minimum amount of swaps required to restore the two interfered broadcasts back to their original states (or -1 if it's not possible). -->