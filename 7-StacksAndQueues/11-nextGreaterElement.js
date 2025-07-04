// The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

// You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2.
// If there is no next greater element, then the answer for this query is -1.

// Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

var nextGreaterElement = function (nums1, nums2) {
  let nge = {};
  let s = [];
  let n = nums2.length;
  let lastVal = nums2[n - 1];

  s.push(lastVal);
  nge[lastVal] = -1;

  for (let i = n - 2; i >= 0; i--) {
    while (s.length) {
      let val = s[s.length - 1];
      if (nums2[i] < val) {
        nge[nums2[i]] = val;
        break;
      } else {
        s.pop();
      }
    }
    if (s.length === 0) {
      nge[nums2[i]] = -1;
    }
    s.push(nums2[i]);
  }

  return nums1.map((val) => nge[val]);
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));

// Output
// [ -1, 3, -1 ]
// [ 3, -1 ]
// TC - O(1)
// SC - O(n)
