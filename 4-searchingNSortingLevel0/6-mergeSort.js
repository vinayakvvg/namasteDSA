// Given an array of integers nums, sort the array in ascending order and return it.

// You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

const mergeHelper = function (nums1, nums2) {
  let i = 0,
    j = 0,
    m = nums1.length,
    n = nums2.length;
  const merged = [];
  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      merged.push(nums1[i++]);
    } else {
      merged.push(nums2[j++]);
    }
  }

  while (i < m) {
    merged.push(nums1[i++]);
  }
  while (j < n) {
    merged.push(nums2[j++]);
  }
  return merged;
};

const mergeSort = function (nums) {
  if (nums.length === 1) return nums;
  const half = Math.floor(nums.length / 2);

  return mergeHelper(
    mergeSort(nums.slice(0, half)),
    mergeSort(nums.slice(half))
  );
};

console.log(mergeSort([7, 4, 8, 2, 5, 9, 3, 6]));

// Output
// [2, 3, 4, 5, 6, 7, 8, 9];
// TC - O(n logn) mergeHelper - O(n) * mergeSort O(log n)
// SC - O(n) - merging requires n as length
