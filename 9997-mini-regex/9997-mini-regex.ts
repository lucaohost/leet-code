// Function to check if a given text matches a pattern
function isMatch(text: string, pattern: string): boolean {
    return isMatchHelper(text, pattern, 0, 0);
}

// Helper function to perform the actual matching recursively
function isMatchHelper(text: string, pattern: string, textIndex: number, patternIndex: number): boolean {
    // If both indices reach the end, it's a complete match
    if (textIndex === text.length && patternIndex === pattern.length) {
        return true;
    }

    // If only the pattern reaches the end, it's not a complete match
    if (patternIndex === pattern.length) {
        return false;
    }

    // If the next character after the pattern is "*", check possibilities
    if (patternIndex + 1 < pattern.length && pattern[patternIndex + 1] === "*") {
        // If the current character matches or is a wildcard "."
        // and it's possible to make a repeated match
        if ((pattern[patternIndex] === "." || pattern[patternIndex] === text[textIndex]) &&
            (textIndex < text.length || patternIndex + 2 === pattern.length)) {
            // Check all possibilities of repetition (0 or more)
            for (let i = 0; textIndex + i <= text.length; i++) {
                if (isMatchHelper(text, pattern, textIndex + i, patternIndex + 2)) {
                    return true;
                }
            }
        }
        // Skip the current pattern and its wildcard "*"
        return isMatchHelper(text, pattern, textIndex, patternIndex + 2);
    }

    // Check if the current character matches or is a wildcard "."
    if ((pattern[patternIndex] === "." || pattern[patternIndex] === text[textIndex]) &&
        textIndex < text.length) {
        return isMatchHelper(text, pattern, textIndex + 1, patternIndex + 1);
    }

    return false; // Otherwise, it's not a match
}

// Tests
function runTest(text: string, pattern: string, expected: boolean, testNumber: number): void {
    console.log("Test " + testNumber + ": " + (isMatch(text, pattern) === expected ? "Passed" : "Failed"));
}

// Running tests
runTest("aaaaabbccc", "a*bbbcc", false, 1);
runTest("aaaaaabbcc", "a*bbcc", true, 2);
runTest("caaad", "ca*.", true, 3);
runTest("aaddcc", ".*dda*", false, 4);
runTest("aaddcc", ".*c", true, 5);
runTest("aaddcc", ".*cc", true, 6);
runTest("aaddcc", ".*ccc", false, 7);
runTest("aaaabbbbccccdddaaaaaaa", ".*ddda*", true, 8);
runTest("aaaabbbbccccdddaaaaaaa", ".*dda*", true, 9);
