const Node = function (val) {
  this.val = val;
  this.next = null;
};

const convertArrayToLinkedlist = function (list, pos) {
  if (list.length == 0) return null;
  let head = new Node(list[0]);
  let temp = null;
  if (pos == 0) temp = head;
  let current = head;
  for (let i = 1; i < list.length; i++) {
    current.next = new Node(list[i]);
    current = current.next;
    if (pos == i) temp = current;
  }
  if (pos > -1) current.next = temp;
  return head;
};

// --- boilerplate code above this

// Given head, the head of a linked list, determine if the linked list has a cycle in it. Return true if there is a cycle; otherwise, return false.

const checkCycle = function (head) {
  let map = new Set();
  let curr = head;
  while (curr) {
    if (map.has(curr)) {
      return true;
    }
    map.add(curr);
    curr = curr.next;
  }
  return false;
};

let inputArray = [1, 2, 3, 4, 5];
let pos = 2;
let head = convertArrayToLinkedlist(inputArray, pos);
let isCyclic = checkCycle(head);
console.log(isCyclic);

pos = -5;
head = convertArrayToLinkedlist(inputArray, pos);
isCyclic = checkCycle(head);
console.log(isCyclic);

// Output
// true
// false
// TC O(n)
// SC O(n)
