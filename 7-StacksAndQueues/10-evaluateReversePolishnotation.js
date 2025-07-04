// You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.
// Evaluate the expression. Return an integer that represents the value of the expression.

// Note that:

// The valid operators are '+', '-', '*', and '/'.
// Each operand may be an integer or another expression.
// The division between two integers always truncates toward zero.
// There will not be any division by zero.
// The input represents a valid arithmetic expression in a reverse polish notation.
// The answer and all the intermediate calculations can be represented in a 32-bit integer.

var evalRPN = function (tokens) {
  let stack = [];
  for (let i = 0; i < tokens.length; i++) {
    if (isNaN(tokens[i])) {
      let expression = tokens[i];
      let a = stack.pop();
      let b = stack.pop();
      let val = Math.trunc(eval(`${b} ${expression} ${a}`));
      stack.push(val);
    } else {
      stack.push(tokens[i]);
    }
  }
  return +stack.pop();
};

console.log(evalRPN(["2", "1", "+", "3", "*"]));
console.log(evalRPN(["4", "13", "5", "/", "+"]));
console.log(
  evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
);

// Output
// 9
// 6
// 22
// TC - O(n)
// SC - O(n)

// Alternate for eval is to use a map
let map = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

// map[tokens[i]](+b, +a);
