const input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

// 입력값
const [N, M] = input.shift().split(" ").map(Number);

// 로봇 청소기의 현재 위치 행, 열, 방향
let [currRow, currCol, currDir] = input.shift().split(" ").map(Number);

const board = input.map((str) => str.split(" ").map(Number));

// 방향 정의(북, 동, 남, 서)
const dirs = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

let cleaningCount = 0;
while (true) {
  // 현재 칸이 아직 청소되지 않은 경우, 현재 칸을 청소한다.
  if (board[currRow][currCol] === 0) {
    board[currRow][currCol] = 2;
    cleaningCount++;
  }

  let isExistNotCleaningArea = false;
  for (let i = 0; i < 4; i++) {
    const nextRow = currRow + dirs[i][0];
    const nextCol = currCol + dirs[i][1];

    // 테두리 확인
    if (nextRow <= 0 || N - 1 <= nextRow || nextCol <= 0 || M - 1 <= nextCol)
      continue;

    // 청소되지 않은 칸인지 확인
    if (board[nextRow][nextCol] === 0) {
      isExistNotCleaningArea = true;
      break;
    }
  }

  // 현재 칸의 주변 4칸 중 청소되지 않은 빈 칸이 있는 경우
  if (isExistNotCleaningArea) {
    // 반시계 90도 회전
    for (let i = 0; i < 4; i++) {
      currDir -= 1;
      if (currDir < 0) currDir = 3;

      const nextRow = currRow + dirs[currDir][0];
      const nextCol = currCol + dirs[currDir][1];

      // 테두리 확인
      if (nextRow <= 0 || N - 1 <= nextRow || nextCol <= 0 || M - 1 <= nextCol)
        continue;

      if (board[nextRow][nextCol] === 0) {
        currRow = nextRow;
        currCol = nextCol;
        break;
      }
    }
  } else {
    // 후진 위치
    currRow += dirs[(currDir + 2) % 4][0];
    currCol += dirs[(currDir + 2) % 4][1];

    // 후진한 곳의 위치가 벽이라면 작동 중지
    if (board[currRow][currCol] === 1) break;
  }
}

console.log(cleaningCount);