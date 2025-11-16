const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = input[0];
const board = input.slice(1).map((str) => str.split('').map(Number));

// 델타 탐색을 위한 방향 정의
const dirs = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const numbers = [];

const visited = Array.from({ length: N }, () => Array(N).fill(false));

const BFS = (row, col) => {
  let count = 1;
  let head = 0;
  const queue = [[row, col]];
  while (head < queue.length) {
    const [currR, currC] = queue[head++];

    for (let i = 0; i < 4; i++) {
      const nr = currR + dirs[i][0];
      const nc = currC + dirs[i][1];

      // 가장자리,  방문여부 및 집이 있는 곳인지 체크
      if (
        nr < 0 ||
        nc < 0 ||
        N <= nr ||
        N <= nc ||
        visited[nr][nc] ||
        !board[nr][nc]
      )
        continue;
      visited[nr][nc] = true;
      queue.push([nr, nc]);
      count++;
    }
  }

  return count;
};

for (let row = 0; row < N; row++) {
  for (let col = 0; col < N; col++) {
    if (board[row][col] === 1 && !visited[row][col]) {
      visited[row][col] = true;
      const count = BFS(row, col);
      numbers.push(count);
    }
  }
}

numbers.sort((a, b) => a - b);
console.log(numbers.length);
for (const number of numbers) {
  console.log(number);
}
