const input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input.shift());

// 현재 물고기의 위치, 크기
let [currX, currY, currSize] = [0, 0, 2];

const board = input.map((str, row) => {
  const cols = str.split(" ").map(Number);
  const col = cols.indexOf(9);
  if (col !== -1) {
    currX = row;
    currY = col;
    cols[col] = 0;
  }
  return cols;
});

const dirs = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

// 경과 시간
let times = 0;

// 아기상어가 먹은 물고기의 개수
let eaten = 0;

const BFS = (startX, startY) => {
  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  visited[startX][startY] = true;

  let head = 0;
  const queue = [[startX, startY, 0]];

  // 이동 가능한 후보지
  const candidates = [];

  while (head < queue.length) {
    const [cx, cy, dist] = queue[head++];

    for (let i = 0; i < 4; i++) {
      const nx = cx + dirs[i][0];
      const ny = cy + dirs[i][1];

      // 지나갈 수 없는 칸 검사
      if (ny < 0 || N <= ny || nx < 0 || N <= nx || visited[nx][ny]) continue;
      if (currSize < board[nx][ny]) continue;

      visited[nx][ny] = true;
      queue.push([nx, ny, dist + 1]);

      if (0 < board[nx][ny] && board[nx][ny] < currSize) {
        candidates.push([nx, ny, dist + 1]);
      }
    }
  }

  if (candidates.length === 0) return;
  // // 조건1. 거리가 가장 가까운 물고기를 먹는다.
  // // 조건2. 거리가 가장 가까운 물고기가 여러 마리라면 가장 위에 있는 물고기를 먹는다.
  // // 조건3. 제일 위에 있는 물고기가 여러 마리라면 가장 왼쪽에 있는 물고기를 먹는다.
  return candidates.sort(
    (a, b) => a[2] - b[2] || a[0] - b[0] || a[1] - b[1]
  )[0];
};

while (true) {
  const target = BFS(currX, currY);
  if (!target) {
    console.log(times);
    break;
  }

  const [targetX, targetY, targetTimes] = target;

  // 해당 물고기는 먹은 것으로 갱신
  board[targetX][targetY] = 0;

  // 아기상어 위치 갱신
  currX = targetX;
  currY = targetY;
  times += targetTimes;
  eaten++;

  // 아기 상어 크기 증가
  if (eaten === currSize) {
    currSize++;
    eaten = 0;
  }
}
