// Selection Sort is a simple comparison-based sorting algorithm.
// It divides the array into two parts: a sorted subarray and an unsorted subarray.
// Initially, the sorted part is empty, and the unsorted part is the entire array.
// In each iteration, it finds the minimum element from the unsorted part and moves it to the end of the sorted part.

const selectionSort = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let min = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[min]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = nums[i];
      nums[i] = nums[min];
      nums[min] = temp;
      //   [nums[i], nums[min]] = [nums[min], nums[i]]; alternate swap method
    }
  }
  return nums;
};

console.log(selectionSort([6, 4, 3, 7, 2, 5]));

// Output
// [ 2, 3, 4, 5, 6, 7 ]
// TC - O(n^2)
// SC - O(1)
