// Write a function sum(n) that calculates the sum of the first n natural numbers using recursion.

const sum = function(n) {
    if (n==1) return 1;
    return n + sum(--n)
}

console.log(sum(5));

// Output
// 15