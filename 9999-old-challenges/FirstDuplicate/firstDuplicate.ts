function firstDuplicate(numbers) {
    let verifiedNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (verifiedNumbers.hasOwnProperty(numbers[i])) {
            return numbers[i];
        }
        verifiedNumbers[numbers[i]] = true;
    }
    return -1;
}

let firstNumberDuplicated: number = firstDuplicate([2, 1, 3, 5, 3, 2]);
console.log(firstNumberDuplicated);