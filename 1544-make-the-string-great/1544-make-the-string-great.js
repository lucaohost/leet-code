var makeGood = function makeGood(s) {
    const stack = [];
    for (let char of s) {
        if (stack.length > 0 && adjacentChars(char, stack[stack.length - 1])) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    return stack.join('');
};

function adjacentChars(char1, char2) {
    if(char1.toUpperCase() === char1) {
        return char1.toLowerCase() === char2;
    } else {
        return char1.toUpperCase() === char2;
    }
}

console.log(makeGood("leEeetcode")); // Output: "leetcode"
console.log(makeGood("abBAcC")); // Output: ""
console.log(makeGood("s")); // Output: "s"