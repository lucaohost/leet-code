function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    // Choose an element as the pivot (usually the last element)
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
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
  const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
  const sortedArray = quickSort(array);
  console.log(sortedArray);
  