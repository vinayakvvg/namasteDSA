var MyStack = function () {
  this.q = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.q.push(x);
  return this.q.length;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  let len = this.q.length;
  for (let i = 0; i < len - 1; i++) {
    this.q.push(this.q.shift());
  }
  return this.q.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  let n = this.q.length;
  for (let i = 0; i < n - 1; i++) {
    this.q.push(this.q.shift());
  }
  let top = this.q.shift();
  this.q.push(top);
  return top;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.q.length === 0;
};

let myStack = new MyStack();
console.log(myStack.push(1));
console.log(myStack.push(2)); // O(1)
console.log(myStack.top()); // return 2 O(n)
console.log(myStack.pop()); // return 2 O(n)
console.log(myStack.empty()); // return False O(1)

// Output
// 1
// 2
// 2
// 2
// false
