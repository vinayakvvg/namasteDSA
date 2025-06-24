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

// Given the head of a linked list and an integer val, remove all the nodes of the linked list that have Node.val == val, and return the new head.

const removeElement = function (head, val) {
  const sentinel = new Node();
  sentinel.next = head;
  let prev = sentinel;

  while (prev && prev.next) {
    if (prev.next.val === val) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }
  return sentinel.next;
};

let inputArray = [1, 2, 3, 2, 1];
let head = convertArrayToLinkedlist(inputArray);
let newHead = removeElement(head, 2);
printListFrom(newHead);

inputArray = [2, 2, 2, 3, 4, 5];
head = convertArrayToLinkedlist(inputArray);
newHead = removeElement(head, 2);
printListFrom(newHead);

// Output
// [ 1, 3, 1 ]
// [ 3, 4, 5 ]
// TC - O(n)
// SC - O(1)
