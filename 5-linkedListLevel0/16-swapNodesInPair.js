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

const swapNodes = function (head) {
  if (!head || !head.next) return head;

  let dummy = new ListNode();
  dummy.next = head;

  let p = dummy;
  let c = head;
  let n = head.next;

  while (c && n) {
    p.next = n;
    c.next = n.next;
    n.next = c;
    p = c;
    c = p.next;
    n = c && c.next;
  }

  return dummy.next;
};

let inputArray1 = [1, 2, 3, 4, 5, 6];
let l1 = convertArrayToLinkedlist(inputArray1);
let newHead = swapNodes(l1);
printListFrom(newHead);

inputArray1 = [1, 2, 3, 4, 5, 6, 7];
l1 = convertArrayToLinkedlist(inputArray1);
newHead = swapNodes(l1);
printListFrom(newHead);

// Output
// [ 2, 1, 4, 3, 6, 5 ]
// [2, 1, 4, 3, 6, 5, 7]
// TC - O(n)
// SC - O(1)
