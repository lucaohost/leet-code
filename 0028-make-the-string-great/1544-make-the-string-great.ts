const makeGood2 = (s: string): string => {
    const stack: string[] = [];
    for (let char of s) {
        if (stack.length > 0 && adjacentChars2(char, stack[stack.length - 1])) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    return stack.join('');
};

const adjacentChars2 = (char1: string, char2: string): boolean => {
    if (char1.toUpperCase() === char1) {
        return char1.toLowerCase() === char2;
    } else {
        return char1.toUpperCase() === char2;
    }
};

// Test cases
console.log(makeGood2("leEeetcode")); // Output: "leetcode"
console.log(makeGood2("abBAcC")); // Output: ""
console.log(makeGood2("s")); // Output: "s"
