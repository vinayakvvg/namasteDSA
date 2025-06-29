const isPalindrome = function (s) {
  const regex = /[a-z0-9]/;
  s = s.toLowerCase();
  let i = 0,
    j = s.length - 1;
  while (i < j) {
    if (!s[i].match(regex)) {
      i++;
    } else if (!s[j].match(regex)) {
      j--;
    } else if (s[i] === s[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
console.log(isPalindrome("naman"));

// Output
// true
// false
// true
// true
// TC - O(n)
// SC - O(1)
