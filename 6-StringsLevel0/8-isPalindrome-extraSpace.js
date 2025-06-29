const isPalindrome = function (s) {
  const regex = /[a-z0-9]/;
  let filteresString = "",
    rev = "";
  s = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(regex)) {
      filteresString = filteresString + s[i];
      rev = s[i] + rev;
    }
  }
  return rev == filteresString;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));

// Output
// true
// false
// true
// TC - O(n)
// SC - O(n) for extra space - to new strings of n length
