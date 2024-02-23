Mini Regex Challenge
- You can't use any regular expression or regex library
- any character = .
- previous character one or multiple times = *
- text and pattern are passed to the function
- needs to solve in javascript
- Example
    - text = aaaabbbc
    - pattern = a*bbbc*
    - result = true

//Test 1
let textTest = "aaaaabbccc";
let patternTest = "a*bbbcc";
console.log(solveRegex(textTest, patternTest) === false ? "Test passed!" : "Test failed!");
//Test 2
textTest = "aaaaaabbcc";
patternTest = "a*bbcc";
console.log(solveRegex(textTest, patternTest) === true ? "Test passed!" : "Test failed!");
//Test 3
textTest = "caaad";
patternTest = "ca*.";
console.log(solveRegex(textTest, patternTest) === true ? "Test passed!" : "Test failed!");
//Test 3
textTest = "aaddcc";
patternTest = ".*dda*";
console.log(solveRegex(textTest, patternTest) === false ? "Test passed!" : "Test failed!");