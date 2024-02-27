function solveRegex(text, pattern) {
    const letters = text.split("");
    const splitedPatterns = splitPatterns(pattern);
    return doRegex(letters, splitedPatterns);
}

function splitPatterns(pattern) {
    const patternChars = pattern.split("");
    const splitedPatterns = [patternChars[0]];
    for (let i = 1; i < patternChars.length; i++) {
        const currentChar = patternChars[i];
        if (currentChar === "*") {
            const lastIndex = splitedPatterns.length - 1;
            splitedPatterns[lastIndex] += currentChar;
        } else {
            splitedPatterns.push(currentChar);
        }
    }
    return splitedPatterns;
}

function doRegex(groupedLetters, patterns) {
    let indexGroupLetterBeingValidated = 0;
    let groupedLettersReversed = groupedLetters.slice().reverse();
    for (let [index, pattern] of patterns.entries()) {
        if (indexGroupLetterBeingValidated === groupedLetters.length - 1) {
            let positionPatternInReverse = patterns.length - 1 - index;
            let character = groupedLettersReversed[positionPatternInReverse][0];
            let charOccurrences = groupedLettersReversed[positionPatternInReverse].length;
            const patternChar = pattern[0];
            let patternOccurrences = evaluatePatternOccurences(pattern);
            if (patternChar !== "." && patternChar !== character) {
                return false;
            }
            if (patternOccurrences !== "*" && patternOccurrences !== charOccurrences) {
                return false;
            }
            continue;
        }
        let patternMatched = 0;
        for (let i = indexGroupLetterBeingValidated; i < groupedLetters.length; i++) {
            indexGroupLetterBeingValidated = i;
            const character = groupedLetters[i][0];
            const charOccurrences = groupedLetters[i].length;
            const patternChar = pattern[0];
            let patternOccurrences = evaluatePatternOccurences(pattern);
            if (patternChar !== "." && patternChar !== character) {
                if (patternMatched === 0) {
                    return false;
                }
                break;
            }
            if (patternOccurrences !== "*" && patternOccurrences !== charOccurrences) {
                if (patternMatched === 0) {
                    return false;
                }
                break;
            }
            patternMatched++;
        }
    }
    return true;
}

function evaluatePatternOccurences(pattern) {
    if (pattern.length === 2) {
        return pattern[1] === "*" ? "*" : 2;
    } else {
        return pattern.length;
    }
}

function runTest(text, pattern, expected) {
    const result = solveRegex(text, pattern);
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
