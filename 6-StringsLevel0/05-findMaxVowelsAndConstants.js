// You are given a string s consisting of lowercase English letters ('a' to 'z').

// Your task is to:

// Find the vowel (one of 'a', 'e', 'i', 'o', or 'u') with the maximum frequency.
// Find the consonant (all other letters excluding vowels) with the maximum frequency.
// Return the sum of the two frequencies.

// Note: If multiple vowels or consonants have the same maximum frequency, you may choose any one of them.
// If there are no vowels or no consonants in the string, consider their frequency as 0.

// The frequency of a letter x is the number of times it occurs in the string.

const isVowel = function (char) {
  return (
    char == "a" || char == "e" || char == "i" || char == "o" || char == "u"
  );
};

const findMaxVowelsAndConstants = function (s) {
  const vowels = {};
  let maxVowels = 0;
  const constants = {};
  let maxConstants = 0;

  for (let i = 0; i < s.length; i++) {
    if (isVowel(s[i])) {
      vowels[s[i]] = (vowels[s[i]] || 0) + 1;
      if (vowels[s[i]] > maxVowels) maxVowels = vowels[s[i]];
    } else {
      constants[s[i]] = (constants[s[i]] || 0) + 1;
      if (constants[s[i]] > maxConstants) maxConstants = constants[s[i]];
    }
  }
  return maxVowels + maxConstants;
};

console.log(findMaxVowelsAndConstants("successes"));
console.log(findMaxVowelsAndConstants("aeiaeia"));

// Output
// 6
// 3
// TC - O(n)
// SC - O(26) characters in alphabet -> O(1)
