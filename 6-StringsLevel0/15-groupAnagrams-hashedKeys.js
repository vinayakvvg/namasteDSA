// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

var groupAnagrams = function (strs) {
  const map = {};

  for (let i = 0; i < strs.length; i++) {
    let s = strs[i];
    let freqArray = Array(26).fill(0);
    for (let j = 0; j < s.length; j++) {
      let index = s[j].charCodeAt() - "a".charCodeAt();
      freqArray[index]++;
    }
    let key = "";

    for (let k = 0; k < 26; k++) {
      key = key + String.fromCharCode(k) + freqArray[k];
      //   key = key + '#' + freqArray[k]; alternative approach # is used as a delimiter
    }

    if (!map[key]) {
      map[key] = [s];
    } else {
      map[key].push(s);
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
// TC - O(n) * O(m) -> O(n * m)
// SC - O(n * m)
