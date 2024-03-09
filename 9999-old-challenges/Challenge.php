<?php

namespace tmp\challenges\ModelBase;

use tmp\challenges\Interfaces\ITestable;

abstract class Challenge implements ITestable {

    public function test(array $inputs, $expectedOutput, $output = null) {
        if ($output == $expectedOutput) {
            echo 'Success!';
        } else {
            $calledClass = get_called_class();
            $inputsPrint = print_r($inputs, true);
            $outputPrint = print_r($output, true);
            $expectedOutputPrint = print_r($expectedOutput, true);
            echo "Error testing {$calledClass}: Input[{$inputsPrint}], Output[$outputPrint], ExpectedOutput[$expectedOutputPrint]";
        }
        echo '<br><br>';
    }

}
