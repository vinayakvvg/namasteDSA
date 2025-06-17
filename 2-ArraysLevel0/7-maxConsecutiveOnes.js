// Given a binary array nums, return the maximum number of consecutive 1’s in the array.

const maxOnes = function (nums) {
  let max = 0,
    count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      max = count > max ? count : max;
      count = 0;
    }
  }
  return count > max ? count : max;
};

console.log(maxOnes([1, 1, 0, 1, 1, 1]));
console.log(maxOnes([1, 0, 1, 1, 0, 1]));
console.log(maxOnes([0, 0]));

// Output
// 3
// 2
// 0
