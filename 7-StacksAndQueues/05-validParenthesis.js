// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

const parenthesisMap = {
  "[": "]",
  "{": "}",
  "(": ")",
};

var isValidParenthesis = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (parenthesisMap[s[i]]) {
      stack.push(s[i]);
    } else {
      let top = stack.pop();
      if (!top || parenthesisMap[top] !== s[i]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(isValidParenthesis("()"));
console.log(isValidParenthesis("()[]{}"));
console.log(isValidParenthesis("(]"));
console.log(isValidParenthesis("([])"));
console.log(isValidParenthesis("]["));

// Output
// true
// true
// false
// true
// false
// TC - O(n)
// SC - O(1)
