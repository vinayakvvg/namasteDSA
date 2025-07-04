var orangesRotting = function (grid) {
  let m = grid.length;
  let n = grid[0].length;

  let queue = [];
  // Initially push all rotten oranges in quque

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j, 0]);
      }
    }
  }

  let minutes = 0;
  // Find more rotten oranges

  while (queue.length) {
    let [x, y, level] = queue.pop();

    if (x > 0 && grid[x - 1][y] == 1) {
      grid[x - 1][y] = 2;
      queue.push([x - 1, y, level + 1]);
    }
    if (x < m - 1 && grid[x + 1][y] == 1) {
      grid[x + 1][y] = 2;
      queue.push([x + 1, y, level + 1]);
    }
    if (y > 0 && grid[x][y - 1] == 1) {
      grid[x][y - 1] = 2;
      queue.push([x, y - 1, level + 1]);
    }
    if (y < n - 1 && grid[x][y + 1] == 1) {
      grid[x][y + 1] = 2;
      queue.push([x, y + 1, level + 1]);
    }
    minutes = Math.max(level, minutes);
  }

  // Find if any orane is not rotten

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 1) {
        return -1;
      }
    }
  }

  return minutes;
};

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
);
console.log(
  orangesRotting([
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1],
  ])
);
console.log(orangesRotting([[0, 2]]));

// Output
// 4
// -1
// 0
// TC - O(m*n)
// SC - O(m*n)
