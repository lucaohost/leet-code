<?php

namespace tmp\challenges\ChallengeTwo;

use tmp\challenges\ModelBase\Challenge;
use tmp\challenges\Interfaces\ITestable;

/**
 * Criar um algoritmo que leia um vetor de números e reordene este vetor
 * contendo no início os números pares de forma crescentee depois,
 * os ímpares de forma decrescente.
 */
class ChallengeTwo extends Challenge implements ITestable {

    /**
     * @param array $numbers
     * @return array
     */
    public function makeArrayAscPairDescOdd(array $numbers) {
        $pairNumbersAsc = [];
        $oddNumbersDesc = [];
        foreach ($numbers as $number) {
            if ($number % 2 === 0) {
                $pairNumbersAsc = $this->putNumberInAscArray($number, $pairNumbersAsc);
            } else {
                $oddNumbersDesc = $this->putNumberInDescArray($number, $oddNumbersDesc);
            }
        }
        return $this->mergeTwoArrays($pairNumbersAsc, $oddNumbersDesc);
    }

    private function putNumberInAscArray($newNumber, array $numbers) {
        if (empty($numbers)) {
            return [$newNumber];
        }
        $newOrderedArray = [];
        $foundPosition = false;
        foreach ($numbers as $key => $number) {
            $nextNumber = $numbers[$key + 1];
            if ($foundPosition) {
                $newOrderedArray[] = $number;
            } elseif ($nextNumber === null) {
                if ($newNumber >= $number) {
                    $newOrderedArray[] = $number;
                    $newOrderedArray[] = $newNumber;
                } else {
                    $newOrderedArray[] = $newNumber;
                    $newOrderedArray[] = $number;
                }
            } elseif ($key === 0 && $newNumber <= $number) {
                $foundPosition = true;
                $newOrderedArray[] = $newNumber;
                $newOrderedArray[] = $number;
            } elseif ($newNumber >= $number && $newNumber <= $nextNumber) {
                $foundPosition = true;
                $newOrderedArray[] = $number;
                $newOrderedArray[] = $newNumber;
            } else {
                $newOrderedArray[] = $number;
            }
        }
        return $newOrderedArray;
    }

    private function putNumberInDescArray($newNumber, array $numbers) {
        if (empty($numbers)) {
            return [$newNumber];
        }
        $newOrderedArray = [];
        $foundPosition = false;
        foreach ($numbers as $key => $number) {
            $nextNumber = $numbers[$key + 1];
            if ($foundPosition) {
                $newOrderedArray[] = $number;
            } elseif ($nextNumber === null) {
                if ($newNumber >= $number) {
                    $newOrderedArray[] = $newNumber;
                    $newOrderedArray[] = $number;
                } else {
                    $newOrderedArray[] = $number;
                    $newOrderedArray[] = $newNumber;
                }
            } elseif ($key === 0 && $newNumber >= $number) {
                $foundPosition = true;
                $newOrderedArray[] = $newNumber;
                $newOrderedArray[] = $number;
            } elseif ($newNumber <= $number && $newNumber >= $nextNumber) {
                $foundPosition = true;
                $newOrderedArray[] = $number;
                $newOrderedArray[] = $newNumber;
            } else {
                $newOrderedArray[] = $number;
            }
        }
        return $newOrderedArray;
    }

    private function mergeTwoArrays($array1, $array2) {
        foreach ($array2 as $element) {
            $array1[] = $element;
        }
        return $array1;
    }

    public function test(array $inputs, $expectedOutput, $output = null) {
        parent::test($inputs, $expectedOutput, $this->makeArrayAscPairDescOdd($inputs[0]));
    }

}

