// Question: Reverse Integer with Overflow Check
// Write a function reverse(x) that takes a 32-bit signed integer and returns its digits reversed. If the reversed value overflows the 32-bit signed integer range, return 0.

// Requirements
// Reverse the digits of a 32-bit signed integer.
// Return 0 if the result overflows.

const reverseInteger = function (num) {
  const copyNum = num;
  num = Math.abs(num);
  let rev = 0;

  while (num != 0) {
    const rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }

  const limit = Math.pow(2, 31); // or 2**31
  if (rev > limit - 1) {
    // checking only positive value as we did Math.abs above
    return "0 (overflow)";
  }

  return copyNum < 0 ? -rev : rev;
};

console.log(reverseInteger(123));
console.log(reverseInteger(-123));
console.log(reverseInteger(1534236469));

// Output
// 321
// -321
// 0 (overflow)
