// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

const missingNum = function (nums, n) {
  let sumOfArray = 0;
  let sumOfN = (n * (n + 1)) / 2;
  for (let i = 0; i < nums.length; i++) {
    sumOfArray += nums[i];
    // sumOfN += i;
  }
  //   sumOfN += n;
  return sumOfN - sumOfArray;
};

console.log(missingNum([4, 0, 2, 1, 5], 5));
console.log(missingNum([0, 1], 2));
console.log(missingNum([9, 6, 4, 2, 3, 5, 7, 0, 1], 9));

// Output
// 3
// 2
// 8