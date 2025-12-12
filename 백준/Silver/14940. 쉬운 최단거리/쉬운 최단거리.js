const input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ").map(Number);

let startRow, startCol;

const board = input.map((row, r) => {
  const col = row.split(" ").map(Number);
  col.forEach((num, j) => {
    if (num === 2) {
      startRow = r;
      startCol = j;
    }
  });
  return col;
});

board[startRow][startCol] = 0;

const dirs = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const visited = Array.from({ length: n }, () => Array(m).fill(false));
visited[startRow][startCol] = true;

let head = 0;
const queue = [[startRow, startCol, 0]];

while (head < queue.length) {
  const [currRow, currCol, currDist] = queue[head++];

  for (let i = 0; i < 4; i++) {
    const nextRow = currRow + dirs[i][0];
    const nextCol = currCol + dirs[i][1];

    if (nextRow < 0 || n <= nextRow || nextCol < 0 || m <= nextCol) continue;
    if (visited[nextRow][nextCol]) continue;
    if (board[nextRow][nextCol] === 0) continue;

    visited[nextRow][nextCol] = true;
    board[nextRow][nextCol] = currDist + 1;
    queue.push([nextRow, nextCol, currDist + 1]);
  }
}

for (let row = 0; row < n; row++) {
  for (let col = 0; col < m; col++) {
    if (board[row][col] === 1) {
      let flag = false;
      for (let i = 0; i < 4; i++) {
        const nextRow = row + dirs[i][0];
        const nextCol = col + dirs[i][1];

        if (nextRow === startRow && nextCol === startCol) {
          flag = true;
          break;
        }
      }
      if (flag === false) board[row][col] = -1;
    }
  }
  console.log(...board[row]);
}