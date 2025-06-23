const Node = function (val) {
  this.val = val;
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

// Given the head of a singly linked list, reverse the list, and return the reversed list.

const reverseLinkedList = function (head) {
  let prev = null,
    curr = head;

  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  return prev;
};

let inputArray = [1, 2, 3, 4, 5];
let head = convertArrayToLinkedlist(inputArray);
let midElement = reverseLinkedList(head);
printListFrom(midElement);

// Output
// [ 5, 4, 3, 2, 1 ]
// TC O(n)
// SC O(1)