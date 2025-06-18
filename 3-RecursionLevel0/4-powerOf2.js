// Write a recursive function isPowerOfTwo(n) that returns true if n is a power of 2, otherwise false.

let num = 64;
const powerOfTwo = function (n) {
  const power = 2 ** n;
  if (num < power) return num == 2 ** (n - 1);

  return powerOfTwo(++n);
};
console.log(powerOfTwo(0));

// Output - true

const alternate = function (num) {
  if (num == 1) return true;
  if (num % 2 !== 0 || num < 0) return false;

  return alternate(num / 2);
};

console.log(alternate(256));
console.log(alternate(258));
console.log(alternate(0));

// Output
// true
// false
// false
