// Write a function secondLargest(arr) that takes an array of numbers and returns the second largest unique number in the array.

// Requirements
// The array must contain at least two numbers.
// If the array contains all equal elements or only one unique element, return: "No second largest found"
// If the array has less than two elements, return: "Array should have at least two numbers"

const findSecondLargest = function (arr) {
  if (arr.length < 2) {
    return "Array should have at least two numbers";
  }

  let largest = -Infinity,
    secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest === -Infinity
    ? "No second largest found"
    : secondLargest;
};

console.log(findSecondLargest([2, -6, 4, 8, 1, 7, 8, -9]));
console.log(findSecondLargest([4, 4, 4, 4]));
console.log(findSecondLargest([2]));
console.log(findSecondLargest([10, 20]));

// checks for -ve and +ve numbers
// checks for duplicate elements in the array and returns not duplicate value

// Output
// 7
// No second largest found
// Array should have at least two numbers
// 10
