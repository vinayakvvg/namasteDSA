const convertQtoString = (q, s) => {
  let n = q.length;
  for (let i = 0; i < n; i++) {
    s += q.shift();
  }
  return s;
};

var removeOuterParentheses = function (s) {
  let q = [],
    temp = 0,
    result = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      q.push(s[i]);
      temp++;
    } else {
      temp--;
      if (temp != 0) q.push(s[i]);
      else {
        q.shift();
        result = convertQtoString(q, result);
      }
    }
  }
  return result;
};

console.log(removeOuterParentheses("(()())(())"));
console.log(removeOuterParentheses("(()())(())(()(()))"));
console.log(removeOuterParentheses("()()"));
console.log(removeOuterParentheses(")("));

// Output
// ()()()
// ()()()()(())
// ""
// ""
// TC - O(n*m)
// SC - O(n)
