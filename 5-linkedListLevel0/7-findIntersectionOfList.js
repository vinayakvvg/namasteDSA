const ListNode = function (val) {
  this.val = val;
  this.next = null;
};

function createLinkedLists(intersectVal, listA, listB, skipA, skipB) {
  // Helper to convert array to linked list
  function buildList(values) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let val of values) {
      current.next = new ListNode(val);
      current = current.next;
    }
    return dummy.next;
  }

  // Create listA and listB
  let headA = buildList(listA);
  let headB = buildList(listB);

  // If there's no intersection, return both heads as is
  if (intersectVal === 0) return { headA, headB, intersectNode: null };

  // Find intersection node in listA at skipA
  let currentA = headA;
  for (let i = 0; i < skipA; i++) {
    currentA = currentA.next;
  }

  // Save reference to this intersect node
  let intersectNode = currentA;

  // Go to end of listB's first `skipB` nodes
  let currentB = headB;
  for (let i = 0; i < skipB; i++) {
    currentB = currentB.next;
  }

  // Connect listB to intersection node
  if (currentB) {
    currentB.next = intersectNode;
  }

  return { headA, headB, intersectNode };
}

// --- boilerplate above this

// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect.
// If the two linked lists have no intersection at all, return null.

const findIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;

  let curr = headA;
  let map = new Set();
  while (curr) {
    map.add(curr);
    curr = curr.next;
  }

  curr = headB;
  while (curr) {
    if (map.has(curr)) {
      return curr;
    }
    curr = curr.next;
  }
  return null;
};

// Output
// Intersection present  true
// Intersection present  false
// TC - O(n)
// SC - O(n)

let listA = [4, 1, 8, 4, 5];
let listB = [5, 6, 1, 8, 4, 5];
let intersectVal = 8;
let skipA = 2;
let skipB = 4;

let { headA, headB, intersectNode } = createLinkedLists(
  intersectVal,
  listA,
  listB,
  skipA,
  skipB
);
let foundNode = findIntersectionNode(headA, headB);
console.log("Intersection present ", foundNode === intersectNode);

listA = [2, 6, 4];
listB = [1, 5];
intersectVal = 0;
skipA = 3;
skipB = 2;

let {
  headA: newHeadA,
  headB: newHeadB,
  intersectNode: newIntersectNode,
} = createLinkedLists(intersectVal, listA, listB, skipA, skipB);
foundNode = findIntersectionNode(newHeadA, newHeadB);
console.log("Intersection present ", (foundNode && newIntersectNode) ?? false);
