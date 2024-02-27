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

function doRegex(letters, patterns) {
    let indexGroupLetterBeingValidated = 0;
    let lettersReversed = letters.slice().reverse();
    for (let [index, pattern] of patterns.entries()) {
        if (indexGroupLetterBeingValidated === letters.length - 1) {
            let positionPatternInReverse = patterns.length - 1 - index;
            let character = lettersReversed[positionPatternInReverse][0];
            const patternChar = pattern[0];
            if (patternChar !== "." && patternChar !== character) {
                return false;
            }
            continue;
        }
        let patternMatched = 0;
        for (let i = indexGroupLetterBeingValidated; i < letters.length; i++) {
            indexGroupLetterBeingValidated = i;
            const character = letters[i][0];
            const patternChar = pattern[0];
            if (patternChar !== "." && patternChar !== character) {
                if (patternMatched === 0) {
                    return false;
                }
                break;
            }
            patternMatched++;
            const patternOccurences = pattern[1];
            if (patternOccurences !== "*") {
                indexGroupLetterBeingValidated++;
                break;
            }
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

function runTest(text, pattern, expected, testNumber) {
    console.log("Starting Test " + testNumber)
    const result = solveRegex(text, pattern);
    console.log(result === expected ? "Test passed!" : "Test failed!");
};

// To test manually and solve doubts: https://regex101.com/
runTest("aaaaabbccc", "a*bbbcc", false, 1);
runTest("aaaaaabbcc", "a*bbcc", true, 2);
runTest("caaad", "ca*.", true, 3);
runTest("aaddcc", ".*dda*", false, 4);
runTest("aaddcc", ".*c", true, 5);
runTest("aaddcc", ".*cc", true, 6);
runTest("aaddcc", ".*ccc", false, 7);
runTest("aaaabbbbccccdddaaaaaaa", ".*ddda*", true, 8);
runTest("aaaabbbbccccdddaaaaaaa", ".*dda*", true, 9);

