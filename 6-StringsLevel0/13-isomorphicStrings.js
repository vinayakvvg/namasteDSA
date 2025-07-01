// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters.
// No two characters may map to the same character, but a character may map to itself.

var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;
  const map1 = {},
    map2 = {};
  for (let i = 0; i < s.length; i++) {
    if (map1[s[i]] && map1[s[i]] !== t[i]) {
      return false;
    } else if (map2[t[i]] && map2[t[i]] !== s[i]) {
      return false;
    } else {
      map1[s[i]] = t[i];
      map2[t[i]] = s[i];
    }
  }
  return true;
};

console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("bar", "foo"));
console.log(isIsomorphic("paper", "title"));

// Output
// true
// false
// false
// true
// TC - O(n)
// SC - O(1)> 26 characters

var alternateApproach = function (s, t) {
  if (s.length !== t.length) return false;
  const mapStoT = {},
    mapTtoS = {};

  for (let i = 0; i < s.length; i++) {
    if (!mapStoT[s[i]] && !mapTtoS[t[i]]) {
      mapStoT[s[i]] = t[i];
      mapTtoS[t[i]] = s[i];
    } else if (mapStoT[s[i]] !== t[i] || mapTtoS[t[i]] !== s[i]) {
      return false;
    }
  }
  return true;
};
