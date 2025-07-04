// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

var MinStack = function () {
  this.s = [];
  this.minS = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.s.push(val);
  let min = this.minS[this.minS.length - 1];
  if (!this.minS.length || val <= min) {
    this.minS.push(val);
  }
  return this.s.length;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let popped = this.s.pop();
  let topMin = this.minS[this.minS.length - 1];
  if (topMin == popped) {
    this.minS.pop();
  }
  return popped;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.s[this.s.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minS[this.minS.length - 1];
};

let minStack = new MinStack();
console.log(minStack.push(-2));
console.log(minStack.push(0));
console.log(minStack.push(-3));
console.log(minStack.getMin());
console.log(minStack.pop());
console.log(minStack.top());
console.log(minStack.getMin());

// Output
// 1
// 2
// 3
// -3
// -3
// 0
// -2
// TC - O(n)
// SC - O(n)
