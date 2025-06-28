// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. 
// Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

const jewelsAndStones = function (jewels, stones) {
  const jewelMap = {};
  let count = 0;
  for (let i = 0; i < jewels.length; i++) {
    if (!jewelMap[jewels[i]]) {
      jewelMap[jewels[i]] = 1;
    }
  }

  for (let i = 0; i < stones.length; i++) {
    if (jewelMap[stones[i]]) {
      count++;
    }
  }
  return count;
};

console.log(jewelsAndStones("aA", "aAAbbbb"));
console.log(jewelsAndStones("z", "ZZ"));

// Output
// 3
// 0
// TC - O(n)
// SC - O(52) -> O(1)
