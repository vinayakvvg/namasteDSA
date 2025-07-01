// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

var groupAnagrams = function (strs) {
  let map = {};
  for (let i = 0; i < strs.length; i++) {
    let sorted = strs[i].split("").sort().join("");
    if (!map[sorted]) {
      map[sorted] = [strs[i]];
    } else {
      map[sorted].push(strs[i]);
    }
  }
  return Object.values(map);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));

// Output
// [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
// [ [ '' ] ]
// [ [ 'a' ] ]
// TC - O(n) * O(m logm) m is the max length of words -> O(n*mlogm) -> O(n^2 logn)
// SC - O(n*m)
