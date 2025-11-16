const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = parseInt(input[0]);

const dirs = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const board = input.slice(1).map((str) => str.split(''));
const visited = Array.from({ length: N }, () => Array(N).fill(false));

const answer = [];

const BFS = (row, col, color) => {
  let head = 0;
  const queue = [[row, col]];

  while (head < queue.length) {
    const [currR, currC] = queue[head++];

    for (let i = 0; i < 4; i++) {
      const nr = currR + dirs[i][0];
      const nc = currC + dirs[i][1];

      // 가장자리 체크
      if (nr < 0 || nc < 0 || N <= nc || N <= nr) continue;

      // 방문 여부 및 동일 색상 체크
      if (visited[nr][nc] || board[nr][nc] !== color) continue;

      visited[nr][nc] = true;
      queue.push([nr, nc]);
    }
  }
};

// 적록색약 ❌
let count = 0;
for (let row = 0; row < N; row++) {
  for (let col = 0; col < N; col++) {
    if (!visited[row][col]) {
      visited[row][col] = true;
      const color = board[row][col];
      BFS(row, col, color);
      count++;
    }
  }
}

answer.push(count);

// 방문 배열 초기화 및 board 내 'G'를 'R'로 변경
visited.forEach((row) => row.fill(false));
board.forEach((row, i) =>
  row.forEach((col, j) => {
    if (col === 'G') board[i][j] = 'R';
  })
);

// 적록색약 ⭕️
count = 0;
for (let row = 0; row < N; row++) {
  for (let col = 0; col < N; col++) {
    if (!visited[row][col]) {
      visited[row][col] = true;
      const color = board[row][col];
      BFS(row, col, color);
      count++;
    }
  }
}

answer.push(count);

console.log(...answer);
