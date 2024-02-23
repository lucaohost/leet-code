function solveRegex(text, pattern) {
    // group letters
    let groupedLetters = [];
    let letters = text.split("");
    groupedLetters.push(letters[0]);
    for(let i = 1; i < text.length; i++) {
        let previousLetter = letters[i - 1];
        let currentLetter = letters[i];
        if(currentLetter === previousLetter) {
            let lastIndex = groupedLetters.length - 1;
            groupedLetters[lastIndex] = groupedLetters[lastIndex] + currentLetter;
        } else {
            groupedLetters.push(currentLetter);
        }
    }
    // group patterns
    let patterns = pattern.split("");
    let groupedPatterns = [];
    groupedPatterns.push(patterns[0]);
    for(let i = 1; i < pattern.length; i++) {
        let previousChar = pattern[i - 1];
        let currentChar = pattern[i];
        if(currentChar === "*" || currentChar === previousChar) {
            let lastIndex = groupedPatterns.length - 1;
            groupedPatterns[lastIndex] = groupedPatterns[lastIndex] + currentChar;
        } else {
            groupedPatterns.push(currentChar);
        }
    }
    // compare group patterns and group letters
    if(groupedPatterns.length !== groupedLetters.length) {
        return false;
    }
    for(index in groupedLetters) {
        let groupLetters = groupedLetters[index];
        let character = groupLetters[0];
        let charOccurences = groupLetters.length;
        let groupPattern = groupedPatterns[index];
        let patternOccurences = 0;
        let pattern = groupPattern[0];
        if(groupPattern.length === 2) {
           patternOccurences = groupPattern[1] === "*" ? "*" : 2;
        } else{
           patternOccurences = groupPattern.length;
        }
        if (pattern !== "." && pattern !== character) {
            return false;
        }
        if(patternOccurences !== "*" && patternOccurences !== charOccurences) {
            return false;
        }
    }
    return true;
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