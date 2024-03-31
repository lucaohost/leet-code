function MatrixSpiral(strArr) {
    let matrix = [];
    strArr.forEach((line, i) => {
        matrix[i] = convertStringToArray(line);
    });
    let result = [];
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;
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

function convertStringToArray(line) {
    let arrayLine = line.split(", ");
    arrayLine[0] = arrayLine[0].slice(1);
    arrayLine[arrayLine.length - 1] = arrayLine[arrayLine.length - 1].slice(0, -1);
    return arrayLine;
}

console.log(MatrixSpiral(["[1, 2]", "[10, 14]"]));
// Output: [ [1, 2, 14, 10] ]
console.log(MatrixSpiral(["[1, 2, 3]", "[4, 5, 6]", "[7, 8, 9]"]));
// Output: [ [1, 2, 3, 6, 9, 8, 7, 4, 5] ]
console.log(MatrixSpiral(["[1, 2, 3, 4]", "[5, 6, 7, 8]", "[9, 10, 11, 12]", "[13, 14, 15, 16]"]));
// Output: [ [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10] ]