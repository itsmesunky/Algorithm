const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 입력값
const N = parseInt(input[0]);
const board = input.slice(1).map((str) => str.split(" ").map(Number));

// 델타 탐색을 위한 방향 정의
const dirs = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

// 최대 높이 찾기
let maxHeight = -Infinity;

for(let i = 0; i < N; i++) {
    for(let j = 0; j < N; j++) {
        maxHeight = Math.max(board[i][j], maxHeight);
    }
}

let answer = -Infinity;

for (let height = 0; height <= maxHeight; height++) {
  let count = 0;

  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  const queue = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      const col = board[i][j];

      if (height < col && !visited[i][j]) {
        count++;
        visited[i][j] = true;
        queue.push([i, j]);

        let head = 0;
        while (head < queue.length) {
          const [currRow, currCol] = queue[head++];

          for (let dir = 0; dir < 4; dir++) {
            const nextRow = currRow + dirs[dir][0];
            const nextCol = currCol + dirs[dir][1];

            // 가장자리 확인
            if (nextRow < 0 || N <= nextRow || nextCol < 0 || N <= nextCol)
              continue;

            // 높이 확인
            if (board[nextRow][nextCol] <= height) continue;

            // 방문여부 확인
            if (visited[nextRow][nextCol]) continue;

            visited[nextRow][nextCol] = true;
            queue.push([nextRow, nextCol]);
          }
        }
      }
    }
  }
  answer = Math.max(answer, count);
}

console.log(answer);
