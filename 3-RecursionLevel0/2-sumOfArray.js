// Write a function sum(n) that calculates the sum of all numbers in an array arr using recursion. It sums from index 0 to n.

const sumOfArr = function (nums) {
  if (nums.length == 0) return 0;
  return nums.shift() + sumOfArr(nums);
};

console.log(sumOfArr([5, 3, 2, 0, 1]));
// Output
// 11

// Write a recursive function sum(n) that calculates the sum of all odd numbers in an array arr up to index n.

const arr = [5, 3, 2, 0, 1];
const sumOfOdd = function (n) {
  const isOdd = arr[n] % 2 != 0;
  if (n == 0) return isOdd ? arr[n] : 0;

  return (isOdd ? arr[n] : 0) + sumOfOdd(--n);
};

console.log(sumOfOdd(arr.length-1));

// Output
// 9