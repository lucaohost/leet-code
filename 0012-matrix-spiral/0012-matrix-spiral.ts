function MatrixSpiral(strArr: string[]): string {
    let matrix: number[][] = [];
    strArr.forEach((line: string, i: number) => {
        matrix[i] = convertStringToArray(line);
    });
    let result: number[] = [];
    let top: number = 0;
    let bottom: number = matrix.length - 1;
    let left: number = 0;
    let right: number = matrix[0].length - 1;
    while (top <= bottom && left <= right) {
        // Print top row
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;

        // Print right column
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;

        // Print bottom row (if exists)
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }

        // Print left column (if exists)
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }
    return result.join(', ');
}

function convertStringToArray(line: string): number[] {
    let arrayLine: string[] = line.split(", ");
    arrayLine[0] = arrayLine[0].slice(1);
    arrayLine[arrayLine.length - 1] = arrayLine[arrayLine.length - 1].slice(0, -1);
    return arrayLine.map(Number);
}

console.log(MatrixSpiral(["[1, 2]", "[10, 14]"]));
// Output: 1, 2, 14, 10
console.log(MatrixSpiral(["[1, 2, 3]", "[4, 5, 6]", "[7, 8, 9]"]));
// Output: 1, 2, 3, 6, 9, 8, 7, 4, 5
console.log(MatrixSpiral(["[1, 2, 3, 4]", "[5, 6, 7, 8]", "[9, 10, 11, 12]", "[13, 14, 15, 16]"]));
// Output: 1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10
