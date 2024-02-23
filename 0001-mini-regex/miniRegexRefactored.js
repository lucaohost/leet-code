function solveRegex(text, pattern) {
    const groupedLetters = groupItems(text, "letter");
    const groupedPatterns = groupItems(pattern, "pattern");
    return doRegex(groupedLetters, groupedPatterns);
}

function groupItems(input, itemType) {
    const items = input.split("");
    const groupedItems = [items[0]];
    for (let i = 1; i < input.length; i++) {
        const previousItem = items[i - 1];
        const currentItem = items[i];
        const patternMultipleTimes = itemType === "pattern" && currentItem === "*";
        if (patternMultipleTimes || currentItem === previousItem) {
            const lastIndex = groupedItems.length - 1;
            groupedItems[lastIndex] += currentItem;
        } else {
            groupedItems.push(currentItem);
        }
    }
    return groupedItems;
}

function doRegex(groupedLetters, groupedPatterns) {
    if (groupedPatterns.length !== groupedLetters.length) {
        return false;
    }
    for (let index in groupedLetters) {
        const groupInput = groupedLetters[index];
        const character = groupInput[0];
        const charOccurrences = groupInput.length;

        const groupPattern = groupedPatterns[index];
        let patternOccurrences;

        if (groupPattern.length === 2) {
            patternOccurrences = groupPattern[1] === "*" ? "*" : 2;
        } else {
            patternOccurrences = groupPattern.length;
        }

        if (groupPattern[0] !== "." && groupPattern[0] !== character) {
            return false;
        }

        if (patternOccurrences !== "*" && patternOccurrences !== charOccurrences) {
            return false;
        }
    }
    return true;
}

function runTest (text, pattern, expected) {
    const result = solveRegex(text, pattern);
    console.log(result === expected ? "Test passed!" : "Test failed!");
};

// Test 1
runTest("aaaaabbccc", "a*bbbcc", false);
// Test 2
runTest("aaaaaabbcc", "a*bbcc", true);
// Test 3
runTest("caaad", "ca*.", true);
// Test 4
runTest("aaddcc", ".*dda*", false);
