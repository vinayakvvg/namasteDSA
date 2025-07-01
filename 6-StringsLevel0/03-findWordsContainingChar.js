// You are given a 0-indexed array of strings words and a character x.

// Return an array of indices representing the words that contain the character x.

// Note that the returned array may be in any order.

const findWordsContainingChar = function (words, x) {
  let result = [];

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] == x) {
        result.push(i);
        break;
      }
    }
  }
  return result;
};

console.log(findWordsContainingChar(["leet", "code"], "e"));
console.log(findWordsContainingChar(["abc", "bcd", "aaaa", "cbc"], "a"));
console.log(findWordsContainingChar(["abc", "bcd", "aaaa", "cbc"], "z"));

// Output
// [0, 1]
// [0, 2]
// []
// TC - O(n^2)
// SC - O(1)
