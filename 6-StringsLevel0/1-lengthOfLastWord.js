// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

const lengthOfLastWord = function (str) {
  let n = str.length - 1;
  let count = 0;

  while (0 <= n) {
    if (str[n] !== " ") {
      break;
    }
    n--;
  }

  while (0 <= n) {
    if (str[n] == " ") break;
    count++;
    n--;
  }
  return count;
};
console.log(lengthOfLastWord("I am vinayak   "));

// Output
// 7
// TC - O(n)
// SC - O(1)
