<?php

namespace tmp\challenges\Interfaces;

interface ITestable {

    public function test(array $inputs, $expectedOutput, $output = null);
}
