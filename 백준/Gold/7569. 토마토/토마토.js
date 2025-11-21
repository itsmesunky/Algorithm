const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 입력값
const [M, N, H] = input[0].split(" ").map(Number);
const inputs = input.slice(1).map((str) => str.split(" ").map(Number));

// 3차원 배열 생성
const boards = [];
for (let i = 0; i < N * H; i += N) {
  boards.push(inputs.slice(i, i + N));
}

const queue = [];
boards.forEach((board, h) =>
  board.forEach((row, n) =>
    row.forEach((col, m) => {
      if (col === 1) queue.push([n, m, h, 0]);
    })
  )
);

const dirs = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

let totalDays = 0;
let head = 0;
while (head < queue.length) {
  const [row, col, height, days] = queue[head++];
  totalDays = Math.max(days, totalDays);

  for (let i = 0; i < 4; i++) {
    const nr = row + dirs[i][0];
    const nc = col + dirs[i][1];

    if (nr < 0 || nc < 0 || N <= nr || M <= nc) continue;
    if (boards[height][nr][nc] === 0) {
      boards[height][nr][nc] = 1;
      queue.push([nr, nc, height, days + 1]);
    }
  }

  const up = height - 1;
  const down = height + 1;

  if (up >= 0 && boards[up][row][col] === 0) {
    boards[up][row][col] = 1;
    queue.push([row, col, up, days + 1]);
  }
  if (down < H && boards[down][row][col] === 0) {
    boards[down][row][col] = 1;
    queue.push([row, col, down, days + 1]);
  }
}

for (const board of boards) {
  for (const row of board) {
    for (const col of row) {
      if (col === 0) {
        console.log(-1);
        return;
      }
    }
  }
}

console.log(totalDays);
