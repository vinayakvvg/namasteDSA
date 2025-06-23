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

// Find the middle node of a singly linked list using the slow and fast pointer approach.

const middle = function (head) {
  let fast = (slow = head);

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

let inputArray = [1, 2, 3, 4, 5];
let head = convertArrayToLinkedlist(inputArray);
let midElement = middle(head);
printListFrom(midElement);

inputArray = [1, 2, 3, 4, 5, 6];
head = convertArrayToLinkedlist(inputArray);
midElement = middle(head);
printListFrom(midElement);

// Output
// [ 3, 4, 5 ]
// [ 4, 5, 6 ]
// TC O(n)
// SC O(1)
