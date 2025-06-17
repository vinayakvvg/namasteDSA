// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Duplicates use XOR (^)
const findNumber = function (nums) {
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }
  return xor;
};

console.log(findNumber([4, 2, 2, 1, 1]));
console.log(findNumber([2, 1, 1]));
console.log(findNumber([1]));

// Output
// 4
// 2
// 1