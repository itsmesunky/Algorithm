const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 입력값
const [N, M] = input[0].split(" ").map(Number);
const board = input.slice(1).map((str) => str.split(" ").map(Number));

// board 순회하며 빈 칸(0) 및 바이러스(2) 좌표 저장
const empties = [];
const viruses = [];
board.forEach((row, i) =>
  row.forEach((col, j) => {
    if (col === 0) empties.push([i, j]);
    if (col === 2) viruses.push([i, j]);
  })
);

const dirs = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

let answer = Number.MIN_SAFE_INTEGER;

// BFS로 바이러스 확산 시킨 후 최종 안전 구역 카운트
const getSafeZoneCount = (arr) => {
  let count = 0;

  const visited = Array.from({ length: N }, () => Array(M).fill(false));

  let head = 0;
  const queue = viruses.map(([row, col]) => [row, col]);

  while (head < queue.length) {
    const [currR, currC] = queue[head++];

    for (let i = 0; i < 4; i++) {
      const nr = currR + dirs[i][0];
      const nc = currC + dirs[i][1];

      // 유효범위 체크
      if (nr < 0 || nc < 0 || N <= nr || M <= nc) continue;

      // 바이러스 확산
      if (!visited[nr][nc] && arr[nr][nc] === 0) {
        arr[nr][nc] = 2;
        visited[nr][nc] = true;
        queue.push([nr, nc]);
      }
    }
  }

  for (let row = 0; row < N; row++) {
    for (let col = 0; col < M; col++) {
      if (arr[row][col] === 0) count++;
    }
  }

  return count;
};

// 빈 칸 좌표들로  조합을 만들어, 해당 조합에 벽 세울 시 안전 구역 카운트
const recursive = (idx, arr) => {
  if (arr.length === 3) {
    // 벽 세우기
    const copiedBoard = board.map((row) => [...row]);
    for (const [row, col] of arr) {
      copiedBoard[row][col] = 1;
    }
    // 최대 안전 영역 갱신
    answer = Math.max(getSafeZoneCount(copiedBoard), answer);
    return;
  }

  for (let i = idx; i < empties.length; i++) {
    arr.push(empties[i]);
    recursive(i + 1, arr);
    arr.pop(); // 백트래킹
  }
};

recursive(0, []);
console.log(answer);
