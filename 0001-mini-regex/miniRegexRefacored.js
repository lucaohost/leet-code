function groupLetters(text) {
    let groupedLetters = [];
    let letters = text.split("");
    groupedLetters.push(letters[0]);
    for (let i = 1; i < text.length; i++) {
        let previousLetter = letters[i - 1];
        let currentLetter = letters[i];
        if (currentLetter === previousLetter) {
            let lastIndex = groupedLetters.length - 1;
            groupedLetters[lastIndex] = groupedLetters[lastIndex] + currentLetter;
        } else {
            groupedLetters.push(currentLetter);
        }
    }
    return groupedLetters;
}

function groupPatterns(pattern) {
    let patterns = pattern.split("");
    let groupedPatterns = [];
    groupedPatterns.push(patterns[0]);
    for (let i = 1; i < pattern.length; i++) {
        let previousChar = pattern[i - 1];
        let currentChar = pattern[i];
        if (currentChar === "*" || currentChar === previousChar) {
            let lastIndex = groupedPatterns.length - 1;
            groupedPatterns[lastIndex] = groupedPatterns[lastIndex] + currentChar;
        } else {
            groupedPatterns.push(currentChar);
        }
    }
    return groupedPatterns;
}

function compareGroups(groupedLetters, groupedPatterns) {
    if (groupedPatterns.length !== groupedLetters.length) {
        return false;
    }

    for (let index in groupedLetters) {
        let groupLetters = groupedLetters[index];
        let character = groupLetters[0];
        let charOccurrences = groupLetters.length;

        let groupPattern = groupedPatterns[index];
        let patternOccurrences = 0;
        let pattern = groupPattern[0];

        if (groupPattern.length === 2) {
            patternOccurrences = groupPattern[1] === "*" ? "*" : 2;
        } else {
            patternOccurrences = groupPattern.length;
        }

        if (pattern !== "." && pattern !== character) {
            return false;
        }

        if (patternOccurrences !== "*" && patternOccurrences !== charOccurrences) {
            return false;
        }
    }

    return true;
}

function solveRegex(text, pattern) {
    let groupedLetters = groupLetters(text);
    let groupedPatterns = groupPatterns(pattern);
    return compareGroups(groupedLetters, groupedPatterns);
}

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
