const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

// 테스트 케이스 수
const TC = parseInt(input[0]);

const dirs = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

let inputRow = 1;

const BFS = (row, col, visited, board, R, C) => {
  let head = 0;
  const queue = [[row, col]];

  while (head < queue.length) {
    const [currR, currC] = queue[head++];
    for (let i = 0; i < 4; i++) {
      const nr = currR + dirs[i][0];
      const nc = currC + dirs[i][1];

      if (
        nr < 0 ||
        nr < 0 ||
        R <= nr ||
        C <= nc ||
        visited[nr][nc] ||
        !board[nr][nc]
      )
        continue;

      visited[nr][nc] = true;
      queue.push([nr, nc]);
    }
  }
};

for (let i = 0; i < TC; i++) {
  // [가로 길이, 세로 길이, 배추 수]
  const [M, N, K] = input[inputRow++].split(' ').map(Number);

  // 배추 밭
  const board = Array.from({ length: N }, () => Array(M).fill(0));
  for (let i = inputRow; i < inputRow + K; i++) {
    const [col, row] = input[i].split(' ').map(Number);
    board[row][col] = 1;
  }

  // 필요한 배추흰지렁이 수
  let count = 0;

  const visited = Array.from({ length: N }, () => Array(M).fill(false));

  for (let row = 0; row < N; row++) {
    for (let col = 0; col < M; col++) {
      if (board[row][col] === 1 && !visited[row][col]) {
        visited[row][col] = true;
        BFS(row, col, visited, board, N, M);
        count++;
      }
    }
  }
    
  console.log(count);
  inputRow += K;
}