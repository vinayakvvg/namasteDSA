// Given an integer array nums, move all 0’s to the end of it while maintaining the relative order of the non-zero elements.

// Note: You must do this in-place without making a copy of the array.

const moveZeroes = function (nums) {
  let n = nums.indexOf(0);
  if (n < 0) return nums;

  for (let i = n; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[i];
      nums[i] = nums[n];
      nums[n++] = temp;
    }
  }

  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));
console.log(moveZeroes([1, 2, 3]));
console.log(moveZeroes([0, 0, 0]));

// Output
// [ 1, 3, 12, 0, 0 ]
// [ 0 ]
// [ 1, 2, 3 ]
// [ 0, 0, 0 ]
