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

// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.
// The first node is considered odd, and the second node is even, and so on.

// Note that the relative order inside both the even and odd groups should remain as it was in the input.
// You must solve the problem in O(1) extra space complexity and O(n) time complexity.

var oddEvenList = function (head) {
  if (!head || !head.next) return head;
  let odd = head,
    even = head.next,
    evenStart = even;

  while (odd.next && even.next) {
    odd.next = odd.next.next;
    even.next = even.next.next;
    odd = odd.next;
    even = even.next;
  }
  odd.next = evenStart;
  return head;
};

let inputArray = [1, 2, 3, 4, 5];
let head = convertArrayToLinkedlist(inputArray);
let newHead = oddEvenList(head);
printListFrom(newHead);

inputArray = [2, 1, 3, 5, 6, 4, 7];
head = convertArrayToLinkedlist(inputArray);
newHead = oddEvenList(head);
printListFrom(newHead);

// Output
// [ 1, 3, 5, 2, 4 ]
// [2, 3, 6, 7, 1, 5, 4]
// TC - O(n)
// SC - O(1)