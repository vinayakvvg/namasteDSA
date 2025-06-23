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

const checkCycleOptimised = function (head) {
  if (!head) return false;

  let slow = head,
    fast = head.next;
  while (slow != fast) {
    if (!fast || !fast.next) {
      return false;
    }
    fast = fast.next.next;
    slow = slow.next;
  }
  return true;
};

let inputArray = [1, 2, 3, 4, 5];
let pos = 2;
let head = convertArrayToLinkedlist(inputArray, pos);
let isCyclic = checkCycleOptimised(head);
console.log(isCyclic);

pos = -5;
head = convertArrayToLinkedlist(inputArray, pos);
isCyclic = checkCycleOptimised(head);
console.log(isCyclic);

// Slow runner will definitely meet the fast runner

// Output
// true
// false
// TC O(n)
// SC O(1)
