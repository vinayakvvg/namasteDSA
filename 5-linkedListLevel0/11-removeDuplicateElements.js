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

// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

const removeDuplicates = function (head) {
  const sentinel = new Node(-Infinity);
  sentinel.next = head;

  let prev = sentinel;
  while (prev && prev.next) {
    if (prev.val < prev.next.val) {
      prev = prev.next;
    } else {
      prev.next = prev.next.next;
    }
  }
  return sentinel.next;
};

let inputArray = [1, 1, 2, 2, 3, 4, 4];
let head = convertArrayToLinkedlist(inputArray);
let newHead = removeDuplicates(head);
printListFrom(newHead);

inputArray = [-20, -20, -10, -10, -5, 2, 3, 3, 4, 5, 5, 6];
head = convertArrayToLinkedlist(inputArray);
newHead = removeDuplicates(head);
printListFrom(newHead);

// Output
// [1, 2, 3, 4]
// [-20, -10, -5, 2, 3, 4, 5, 6];
// TC - O(n)
// SC - O(1)

// Solution will work without sentinel as well as the head will never be deleted
var deleteDuplicates = function (head) {
    let prev = head;
    while (prev && prev.next) {
        if (prev.val < prev.next.val) {
            prev = prev.next;
        } else {
            prev.next = prev.next.next;
        }
    }
    return head;
};