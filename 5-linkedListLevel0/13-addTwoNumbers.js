const Node = function (val) {
  this.val = val ? val : 0;
  this.next = null;
};

const convertArrayToLinkedlist = function (list) {
  if (list.length == 0) return null;
  let head = new Node(list[0]);
  let current = head;
  for (let i = 1; i < list.length; i++) {
    current.next = new Node(list[i]);
    current = current.next;
  }
  return head;
};

const printListFrom = function (node) {
  let arr = [];
  while (node) {
    arr.push(node.val);
    node = node.next;
  }
  console.log(arr);
};

// --- boilerplate code above this

// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

var addTwoNumbers = function (l1, l2) {
  let carry = 0,
    sum = 0;
  let sentinel = (head = new Node());
  while (l1 || l2 || carry) {
    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    let newVal = sum % 10;
    carry = Math.floor(sum / 10);
    sentinel.next = new Node(newVal);
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
    sentinel = sentinel.next;
  }

  return head.next;
};

let inputArray1 = [2, 4, 3];
let inputArray2 = [5, 6, 4];
let l1 = convertArrayToLinkedlist(inputArray1);
let l2 = convertArrayToLinkedlist(inputArray2);
let newHead = addTwoNumbers(l1, l2);
printListFrom(newHead);

inputArray1 = [9, 9, 9, 9, 9, 9, 9];
inputArray2 = [9, 9, 9, 9];
l1 = convertArrayToLinkedlist(inputArray1);
l2 = convertArrayToLinkedlist(inputArray2);
newHead = addTwoNumbers(l1, l2);
printListFrom(newHead);

// Output
// [ 7, 0, 8 ]
// [8, 9, 9, 9, 0, 0, 0, 1]
// TC - O(n)
// SC - O(1)
