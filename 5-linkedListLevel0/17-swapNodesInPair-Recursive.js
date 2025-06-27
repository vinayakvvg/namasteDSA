const ListNode = function (val) {
  this.val = val ? val : 0;
  this.next = null;
};

const convertArrayToLinkedlist = function (list) {
  if (list.length == 0) return null;
  let head = new ListNode(list[0]);
  let current = head;
  for (let i = 1; i < list.length; i++) {
    current.next = new ListNode(list[i]);
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

// Given a linked list, swap every two adjacent nodes and return its head.
// You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

const swapInPairs = function (head) {
  if (!head || !head.next) return head;
  let l = head,
    r = head.next;
  l.next = swapInPairs(r.next);
  r.next = l;
  return r;
};

let inputArray1 = [1, 2, 3, 4, 5, 6];
let l1 = convertArrayToLinkedlist(inputArray1);
let newHead = swapInPairs(l1);
printListFrom(newHead);

inputArray1 = [1, 2, 3, 4, 5, 6, 7];
l1 = convertArrayToLinkedlist(inputArray1);
newHead = swapInPairs(l1);
printListFrom(newHead);

// Output
// [ 2, 1, 4, 3, 6, 5 ]
// [2, 1, 4, 3, 6, 5, 7]
// TC - O(n)
// SC - O(1)
