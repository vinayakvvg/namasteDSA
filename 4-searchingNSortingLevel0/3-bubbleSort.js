// Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements,
// and swaps them if they are in the wrong order.
// This process is repeated until the array is sorted.
// After each pass, the largest unsorted element “bubbles up” to its correct position at the end of the array.
// It’s called “Bubble Sort” because smaller elements slowly “bubble” to the top of the list.

const bubbleSort = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  return nums;
};

console.log(bubbleSort([6, 4, 3, 7, 2, 5]));

// Output
// [ 2, 3, 4, 5, 6, 7 ]
// TC - O(n^2)
// SC - O(1)

const bubbleSortImproved = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    let isSorted = true;
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        isSorted = false;
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
    if (isSorted) break;
  }
  return nums;
};

console.log(bubbleSortImproved([6, 4, 3, 7, 2, 5]));
