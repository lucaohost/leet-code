function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }
  // Choose an element as the pivot (usually the last element)
  const pivot: number = arr[arr.length - 1];
  const left: number[] = [];
  const right: number[] = [];
  // Divide the elements into sub-arrays smaller than the pivot and greater than the pivot
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  // Recursively sort the sub-arrays
  return [...quickSort(left), pivot, ...quickSort(right)];
}  

// Test
const array: number[] = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedArray: number[] = quickSort(array);
console.log(sortedArray);
