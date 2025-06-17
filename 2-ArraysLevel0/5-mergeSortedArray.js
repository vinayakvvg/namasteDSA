// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, 
// representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. 
// To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, 
// and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

const mergeSortedArray = function (nums1, m, nums2, n) {
  let newArray = [],
    i = 0,
    j = 0;
  while (i < m && j < n) {
    if (nums1[i] <= nums2[j]) {
      newArray.push(nums1[i++]);
    } else {
      newArray.push(nums2[j++]);
    }
  }

  while (i < m) {
    newArray.push(nums1[i++]);
  }
  while (j < n) {
    newArray.push(nums2[j++]);
  }
  nums1 = newArray;
  console.log("Array 1", nums1);
};

// mergeSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
// mergeSortedArray([1], 1, [], 0);
// mergeSortedArray([1, 5, 6, 0, 0, 0], 3, [2, 3, 4], 3);

const approach2 = function (nums1, m, nums2, n) {
  let p1 = m - 1,
    p2 = n - 1;
  for (let i = m + n - 1; i >= 0 && p2 > 0; i--) {
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1--];
    } else {
      nums1[i] = nums2[p2--];
    }
  }

  console.log("approach2 >", p1, p2);
  console.log("approach2 >", nums1);
};

approach2([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
approach2([1, 5, 6, 0, 0, 0], 3, [2, 3, 4], 3);
