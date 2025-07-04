// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i]
// is the number of days you have to wait after the ith day to get a warmer temperature.
// If there is no future day for which this is possible, keep answer[i] == 0 instead.

var dailyTemperatures = function (temps) {
  let stack = [];
  n = temps.length;
  stack.push(n - 1);
  let answer = Array(n).fill(0);

  for (let i = n - 2; i >= 0; i--) {
    while (stack.length) {
      sTop = stack[stack.length - 1];
      if (temps[i] < temps[sTop]) {
        answer[i] = sTop - i;
        break;
      } else {
        stack.pop();
      }
    }
    stack.push(i);
  }
  return answer;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
console.log(dailyTemperatures([30, 40, 50, 60]));
console.log(dailyTemperatures([30, 60, 90]));

// Output
// [ 1, 1, 4, 2, 1, 1, 0, 0 ]
// [ 1, 1, 1, 0 ]
// [ 1, 1, 0 ]
// TC - O(n)
// SC - O(n), if answer is also considered O(n) > O(n) +O(n) = O(n)
// Push only indices for this problem
