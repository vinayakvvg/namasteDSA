// Best Time to Buy and Sell Stock 1
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

const buySellStocks = function (arr) {
  let maxProfit = 0,
    min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - min > maxProfit) {
      maxProfit = arr[i] - min;
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return maxProfit;
};

console.log(buySellStocks([7, 1, 5, 3, 6, 4]));
console.log(buySellStocks([7, 6, 4, 3, 1]));
console.log(buySellStocks([7, 1, 5, 3, 6, 4, 0, 2, 4, 8, 5]));
console.log(buySellStocks([7]));

// Output
// 5
// 0
// 8
// 0
