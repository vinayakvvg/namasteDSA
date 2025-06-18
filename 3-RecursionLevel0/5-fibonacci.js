// The Fibonacci sequence is a famous mathematical series in which each number is the sum of the two preceding ones. It’s defined by the recurrence relation:

// F(0) = 0
// F(1) = 1
// F(n) = F(n-1) + F(n-2)  for n > 1

const fibonacci = function (num) {
  if (num == 0) return 0;
  if (num == 1) return 1;
  //   if (num <= 1) return num; alternate approach

  return fibonacci(num - 1) + fibonacci(num - 2);
};
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));

// Output
// 1
// 2
// 3
// 5
// Time Complexity - O(2**n)