// Insertion Sort is a simple and intuitive sorting algorithm that builds the final sorted array one element at a time.
// It works by taking each element from the input and inserting it into its correct position in the already sorted part of the array.
// Starting from the second element, it compares the current element with the previous ones,
// shifting larger elements one position ahead to make space for the current element. This process continues until all elements are sorted.
// Insertion Sort is efficient for small or nearly sorted datasets and operates in-place without requiring extra memory.

const insertionSort = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    let cur = nums[i];
    let p = i - 1;
    while (cur < nums[p] && p >= 0) {
      nums[p + 1] = nums[p];
      p--;
    }
    nums[p + 1] = cur;
  }
  return nums;
};

console.log(insertionSort([6, 4, 3, 7, 2, 5]));
console.log(insertionSort([3, 4, 5, 7, 1, 2]));

// Output
// [ 2, 3, 4, 5, 6, 7 ]
// [ 1, 2, 3, 4, 5, 7 ]
// TC - O(n^2)
// SC - O(1)
