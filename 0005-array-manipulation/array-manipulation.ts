function arrayManipulation(n: number, queries: number[][]): number {
    let myArray: number[] = Array(n).fill(0);
    let maxValue: number = 0;
    
    queries.forEach((query: number[]) => {
        let indexA: number = query[0] - 1;
        let indexB: number = query[1] - 1;
        let valueToSum: number = query[2];

        myArray[indexA] += valueToSum;

        if (indexB + 1 < n) {
            myArray[indexB + 1] -= valueToSum;
        }
    });

    let currentSum: number = 0;
    for (let i = 0; i < n; i++) {
        currentSum += myArray[i];
        if (currentSum > maxValue) {
            maxValue = currentSum;
        }
    }
    return maxValue;
}
