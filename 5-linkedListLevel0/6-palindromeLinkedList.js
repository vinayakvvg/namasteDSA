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

// --- boilerplate code above this

// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

const findMiddle = function (head) {
  if (!head) return head;
  let fast = (slow = head);
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

const reversedList = function (head) {
  if (!head) return head;
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

const isPalindromeList = function (head) {
  const mid = findMiddle(head);
  let second = reversedList(mid);
  let first = head;
  while (second) {
    if (first.val !== second.val) {
      return false;
    }
    first = first.next;
    second = second.next;
  }
  return true;
};

let inputArray = [1, 2, 3, 2, 1];
let head = convertArrayToLinkedlist(inputArray);
console.log(isPalindromeList(head));

inputArray = [1, 2, 3, 4, 5];
head = convertArrayToLinkedlist(inputArray);
console.log(isPalindromeList(head));

inputArray = [1, 2, 2, 1];
head = convertArrayToLinkedlist(inputArray);
console.log(isPalindromeList(head));

// Output
// true
// false
// true
// TC - O(n)
// SC - O(1)
