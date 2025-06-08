// Reverse string
// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.

const reverseStringArray = function (strArray) {
  const len = strArray.length;
  const halfLength = Math.floor(len / 2);
  for (let i = 0; i < halfLength; i++) {
    const temp = strArray[len - i - 1];
    strArray[len - i - 1] = strArray[i];
    strArray[i] = temp;
  }
  return strArray;
};

console.log(reverseStringArray(["h", "e", "l", "l", "o"]));
console.log(reverseStringArray(["H", "a", "n", "n", "a", "h"]));

// Output
// [ 'o', 'l', 'l', 'e', 'h' ]
// [ 'h', 'a', 'n', 'n', 'a', 'H' ]

// TC : O(n)
// SC : O(1)
