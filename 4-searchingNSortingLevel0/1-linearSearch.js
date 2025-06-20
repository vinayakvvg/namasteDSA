// Linear Search is a simple search algorithm used to find a specific element in an array.
// It checks each element of the array one by one until the target value is found or the end of the array is reached.

var search = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      return i;
    }
  }
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([-1, 0, 3, 5, 9, 12], 2));

// Output
// 4
// -1
// TC - O(n)
// SC - O(1)
