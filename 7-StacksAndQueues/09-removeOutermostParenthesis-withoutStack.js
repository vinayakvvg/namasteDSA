var removeOuterParentheses = function (s) {
  let level = -1,
    result = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      level++;
      if (level) {
        result += s[i];
      }
    } else {
      if (level) {
        result += s[i];
      }
      level--;
    }
  }

  return result;
};

console.log(removeOuterParentheses("(()())(())"));
console.log(removeOuterParentheses("(()())(())(()(()))"));
console.log(removeOuterParentheses("()()"));
console.log(removeOuterParentheses(")(")); //This test case fails for this solution

// Output
// ()()()
// ()()()()(())
// ""
// ")("
// TC - O(n)
// SC - O(1)
