var balancedStringSplit = function (s) {
  let l = 0,
    r = 0,
    count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "L") l++;
    if (s[i] == "R") r++;
    if (l == r) count++;
  }
  return count;
};

console.log(balancedStringSplit("RLRRLLRLRL"));
console.log(balancedStringSplit("RLRRRLLRLL"));
console.log(balancedStringSplit("LLLLRRRR"));

// Output
// 4
// 2
// 1
// TC - O(n)
// SC - O(1)
