var MyStack = function () {
  this.q1 = [];
  this.q2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.q1.push(x);
  return this.q1.length;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  let len1 = this.q1.length;
  for (let i = 0; i < len1 - 1; i++) {
    let val = this.q1.shift();
    this.q2.push(val);
  }
  let popped = this.q1.shift();
  this.q1 = this.q2;
  this.q2 = [];
  return popped;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  let len1 = this.q1.length;
  for (let i = 0; i < len1 - 1; i++) {
    let val = this.q1.shift();
    this.q2.push(val);
  }
  let last = this.q1.shift();
  this.q2.push(last);
  this.q1 = this.q2;
  this.q2 = [];
  return last;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.q1.length === 0;
};

let myStack = new MyStack();
console.log(myStack.push(1));
console.log(myStack.push(2));
console.log(myStack.top()); // return 2
console.log(myStack.pop()); // return 2
console.log(myStack.empty()); // return False

// Output
// 1
// 2
// 2
// 2
// false
