// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const map = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) map[s[i]]++;
    else map[s[i]] = 1;
  }

  for (let i = 0; i < t.length; i++) {
    if (!map[t[i]]) {
      return false;
    } else {
      map[t[i]]--;
    }
    if (map[t[i]] < 0) {
      return false;
    }
  }

  return true;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("anagram", "nagara"));
console.log(isAnagram("rat", "car"));
console.log(isAnagram("rat", ""));
console.log(isAnagram("", "car"));

// Output
// true
// false
// false
// false
// false
// TC - O(n)
// SC - O(1)> 26 characters
