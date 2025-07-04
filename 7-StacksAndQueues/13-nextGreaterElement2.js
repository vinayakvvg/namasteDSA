// Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]),
// return the next greater number for every element in nums.

// The next greater number of a number x is the first greater number to its traversing-order next in the array,
// which means you could search circularly to find its next greater number. If it doesn't exist, return -1 for this number.

// Solution: Doubling Array
var nextGreaterElements = function (nums) {
  let newArr = nums.concat(nums);
  let n = newArr.length;

  let stack = [];
  let ans = Array(n).fill(-1);
  stack.push(newArr[n - 1]);

  for (let i = n - 2; i >= 0; i--) {
    while (stack.length) {
      let sTop = stack[stack.length - 1];
      if (newArr[i] < sTop) {
        ans[i] = sTop;
        break;
      } else {
        stack.pop();
      }
    }
    stack.push(newArr[i]);
  }

  return ans.slice(0, nums.length);
};

console.log(nextGreaterElements([1, 2, 3, 4, 3]));
console.log(nextGreaterElements([1, 2, 1]));

// Output
// [ 2, 3, 4, -1, 4 ]
// [ 2, -1, 2 ]
// TC - O(n)
// SC - O(n) if consider answer

//Solution: Without dubling array

var nextGreaterElementsNoDouble = function (nums) {
  let n = nums.length;

  let stack = [];
  let ans = Array(n).fill(-1);
  stack.push(nums[n - 1]);

  for (let i = 2 * n - 2; i >= 0; i--) {
    while (stack.length) {
      let sTop = stack[stack.length - 1];
      if (nums[i % n] < sTop) {
        ans[i % n] = sTop;
        break;
      } else {
        stack.pop();
      }
    }
    stack.push(nums[i % n]);
  }

  return ans.slice(0, n);
};

console.log(nextGreaterElementsNoDouble([1, 2, 3, 4, 3]));
console.log(nextGreaterElementsNoDouble([1, 2, 1]));

// Output
// [ 2, 3, 4, -1, 4 ]
// [ 2, -1, 2 ]
// TC - O(n)
// SC - O(n) if consider answer