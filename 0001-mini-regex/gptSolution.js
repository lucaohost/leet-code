function customRegex(input, pattern) {
    let patternIndex = 0;
    let inputIndex = 0;
  
    while (inputIndex < input.length && patternIndex < pattern.length) {
      if (pattern[patternIndex] === '.' || pattern[patternIndex] === input[inputIndex]) {
        patternIndex++;
        inputIndex++;
      } else if (pattern[patternIndex] === '*') {
        patternIndex++;
        while (inputIndex < input.length && input[inputIndex] !== pattern[patternIndex]) {
          inputIndex++;
        }
      } else {
        return false;
      }
    }
  
    if (patternIndex === pattern.length && inputIndex === input.length) {
      return true;
    }
  
    return false;
  }
  
  // Example usage
  const isMatch = customRegex('a.*b', 'axyzb');
  console.log(isMatch); // Output: true
  

function runTest (text, pattern, expected) {
    const result = customRegex(text, pattern);
    console.log(result === expected ? "Test passed!" : "Test failed!");
};
  
 // Test 1
console.log("Starting Test 1.")
runTest("aaaaabbccc", "a*bbbcc", false);
// Test 2
console.log("Starting Test 2.")
runTest("aaaaaabbcc", "a*bbcc", true);
// Test 3
console.log("Starting Test 3.")
runTest("caaad", "ca*.", true);
// Test 4
console.log("Starting Test 4.")
runTest("aaddcc", ".*dda*", false);
// Test 5
console.log("Starting Test 5.")
runTest("aaddcc", ".*c", true);
// Test 6
console.log("Starting Test 6.")
runTest("aaddcc", ".*cc", true);
// Test 7
console.log("Starting Test 7.")
runTest("aaddcc", ".*ccc", false);
  