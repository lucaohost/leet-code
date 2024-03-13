function arrayManipulation(n, queries) {
    let myArray = Array(n).fill(0);
    let maxValue = 0;
    queries.forEach((query) => {
        let indexA = query[0] - 1;
        let indexB = query[1] - 1;
        let valueToSum = query[2];

        myArray[indexA] += valueToSum;

        if (indexB + 1 < n) {
            myArray[indexB + 1] -= valueToSum;
        }
        console.log("myArray: ", myArray);
    });
    let currentSum = 0;
    for (let i = 0; i < n; i++) {
        currentSum += myArray[i];
        if (currentSum > maxValue) {
            maxValue = currentSum;
        }
    }
    return maxValue;
}