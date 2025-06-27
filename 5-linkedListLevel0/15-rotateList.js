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

const rotateList = function (head, k) {
  if (!head || !head.next || k == 0) return head;

  let size = 1,
    curr = head;
  while (curr.next) {
    curr = curr.next;
    size++;
  }
  curr.next = head;

  k = k % size;

  curr = head;
  for (let i = 1; i < size - k; i++) {
    curr = curr.next;
  }
  let newHead = curr.next;
  curr.next = null;

  return newHead;
};

// first and second pointer approach
var rotateRight = function (head, k) {
  if (!head || !head.next) return head;
  let len = 0,
    curr = head;

  while (curr) {
    curr = curr.next;
    len++;
  }
  k = k % len;

  let s = head,
    f = head;

  for (let i = 0; i < k; i++) {
    f = f.next;
  }

  while (f.next) {
    f = f.next;
    s = s.next;
  }

  f.next = head;
  let nHead = s.next;
  s.next = null;
  return nHead;
};

let inputArray1 = [1, 2, 3, 4, 5];
let l1 = convertArrayToLinkedlist(inputArray1);
let newHead = rotateList(l1, 2);
printListFrom(newHead);

inputArray1 = [0, 1, 2];
l1 = convertArrayToLinkedlist(inputArray1);
newHead = rotateRight(l1, 4);
printListFrom(newHead);

// Output
// [ 4, 5, 1, 2, 3 ]
// [ 2, 0, 1 ]
// TC - O(n)
// SC - O(1)
