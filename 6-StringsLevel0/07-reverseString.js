const reverse = function (s) {
  let newS = "";
  for (let i = s.length - 1; i >= 0; i--) {
    newS += s[i];
  }
  return newS;
};

const reverseString = function (s, k) {
  let start = 0,
    end = k;
  let newS = "";
  while (end <= s.length) {
    newS += reverse(s.slice(start, end));
    start = end;
    end = end + k;
    newS += s.slice(start, end);
    start = end;
    end = end + k;
  }
  return newS;
};

console.log(reverseString("abcd", 2));
console.log(reverseString("abcdefg", 2));
console.log(reverseString("abcdefg", 1));

// Output
// bacd
// bacdfeg
// abcdefg
// TC - O(n)
// SC - O(1)