var MyQueue = function () {
  this.s1 = [];
  this.s2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.s1.push(x);
  return this.s1.length + this.s2.length;
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.s2.length === 0) {
    let n = this.s1.length;
    for (let i = 0; i < n; i++) {
      this.s2.push(this.s1.pop());
    }
  }
  return this.s2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.s2.length == 0) {
    let n = this.s1.length;
    for (let i = 0; i < n; i++) {
      this.s2.push(this.s1.pop());
    }
  }
  return this.s2[this.s2.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.s1.length == 0 && this.s2.length == 0;
};

let myQueue = new MyQueue();
console.log(myQueue.push(1)); // queue is: [1] O(1)
console.log(myQueue.push(2)); // queue is: [1, 2] (leftmost is front of the queue) O(1)
console.log(myQueue.peek()); // return 1 Worst case - O(n) // avg case(amortised case) - O(1)
console.log(myQueue.pop()); // return 1, queue is [2] Worst case - O(n) // avg case - O(1)
console.log(myQueue.empty()); // return false O(1)

// Output
// 1
// 2
// 1
// 1
// false
