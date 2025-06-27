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

// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  let senA = new ListNode();
  let senB = new ListNode();
  senA.next = list1;
  senB.next = list2;
  let copy = (finalSen = new ListNode()),
    valA,
    valB;

  while (senA.next && senB.next) {
    valA = senA.next.val;
    valB = senB.next.val;
    if (valA < valB) {
      finalSen.next = senA.next;
      finalSen = finalSen.next;
      senA.next = senA.next && senA.next.next;
    } else {
      finalSen.next = senB.next;
      finalSen = finalSen.next;
      senB.next = senB.next && senB.next.next;
    }
  }

  finalSen.next = senA.next ? senA.next : senB.next;
  return copy.next;
};

let inputArray1 = [2, 3, 4];
let inputArray2 = [4, 5, 6];
let l1 = convertArrayToLinkedlist(inputArray1);
let l2 = convertArrayToLinkedlist(inputArray2);
let newHead = mergeTwoLists(l1, l2);
printListFrom(newHead);

inputArray1 = [1, 2, 4];
inputArray2 = [1, 3, 4];
l1 = convertArrayToLinkedlist(inputArray1);
l2 = convertArrayToLinkedlist(inputArray2);
newHead = mergeTwoLists(l1, l2);
printListFrom(newHead);

// Output
// [ 2, 3, 4, 4, 5, 6 ]
// [ 1, 1, 2, 3, 4, 4 ]
// TC - O(n)
// SC - O(1)

var otherApproach = function (list1, list2) {
  let start = new ListNode();
  curr = start;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }
  curr.next = list1 || list2;
  return start.next;
};

inputArray1 = [1, 2, 4];
inputArray2 = [1, 3, 4];
l1 = convertArrayToLinkedlist(inputArray1);
l2 = convertArrayToLinkedlist(inputArray2);
newHead = otherApproach(l1, l2);
printListFrom(newHead);
