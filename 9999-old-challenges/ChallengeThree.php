<?php

namespace tmp\challenges\ChallengeThree;

use tmp\challenges\ModelBase\Challenge;
use tmp\challenges\Interfaces\ITestable;

/**
 * Escreva um algoritmo que calcule o tempo em dias
 * a partir de uma data inicial e final recebidos no
 * formato dd/mm/aaaa. Não deve usar funções de data e hora.
 */
class ChallengeThree extends Challenge implements ITestable {

    private $accumulatedDaysPerMonth = [
        '01' => 31, // +31 days
        '02' => 59, // +28 days
        '03' => 90, // +31 days
        '04' => 120, // +30 days
        '05' => 151, // +31 days
        '06' => 181, // +30 days
        '07' => 212, // +31 days
        '08' => 243, // +31 days
        '09' => 273, // +30 days
        '10' => 304, // +31 days
        '11' => 334, // +30 days
        '12' => 365, // +31 days
    ];

    public function DiffDates($initDate, $finalDate) {
        list($initDay, $initMonth, $initYear) = explode('/', $initDate);
        list($finalDay, $finalMonth, $finalYear) = explode('/', $finalDate);
        $initDateTotalDays = $initDay + $this->accumulatedDaysPerMonth[$initMonth] + ($initYear * 365);
        $initDateTotalDays += $this->numLeapYearsSinceYearZero($initYear);
        $finalDateTotalDays = $finalDay + $this->accumulatedDaysPerMonth[$finalMonth] + ($finalYear * 365);
        $finalDateTotalDays += $this->numLeapYearsSinceYearZero($finalYear);
        return $finalDateTotalDays - $initDateTotalDays;
    }

    private function numLeapYearsSinceYearZero($year) {
        $yearsDividedBy4 = floor($year / 4);
        $yearsDividedBy100 = floor($year / 100);
        $yearsDividedBy400 = floor($year / 400);
        return $yearsDividedBy4 - $yearsDividedBy100 + $yearsDividedBy400;
    }

    public function test(array $inputs, $expectedOutput, $output = null) {
        parent::test($inputs, $expectedOutput, $this->DiffDates($inputs[0], $inputs[1]));
    }

}
