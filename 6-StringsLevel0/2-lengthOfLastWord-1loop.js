// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

const lengthOfLastWord = function (s) {
  let n = s.length - 1,
    count = 0;

  while (n >= 0) {
    if (s[n] !== " ") count++;
    if (s[n] !== " " && s[n - 1] == " ") break;
    n--;
  }
  return count;
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("I am vinayak   "));

// Output
// 5
// 7
// TC - O(n)
// SC - O(1)
