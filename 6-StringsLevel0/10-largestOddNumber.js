const isOdd = function (num) {
  return !(Number(num) % 2 == 0);
};

var largestOddNumber = function (num) {
  for (let i = num.length - 1; i >= 0; i--) {
    if (isOdd(num[i])) {
      return num.substring(0, i + 1);
    }
  }
  return "";
};

console.log(largestOddNumber("52"));
console.log(largestOddNumber("4206"));
console.log(largestOddNumber("35427"));

// Output
// "5"
// ""
// "35427"
// TC - O(n)
// SC - O(1)
