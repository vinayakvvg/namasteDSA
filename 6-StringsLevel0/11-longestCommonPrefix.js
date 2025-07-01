// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".
var longestCommonPrefix = function (strs) {
  let x = 0;
  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i];
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== char || x == strs[j].length) {
        return strs[0].substring(0, x);
      }
    }
    x++;
  }
  return strs[0];
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));

// Output
// fl
// ""
// TC - O(n*m)
// SC - O(1)
