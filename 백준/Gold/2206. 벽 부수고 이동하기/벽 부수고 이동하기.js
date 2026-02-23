const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const board = input.map((str) => str.replace("\r\n", "").split("").map(Number));

const visited = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => Array(2).fill(0)),
);

const dirs = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

let head = 0;
const queue = [[0, 0, 0]];
visited[0][0][0] = 1;

while (head < queue.length) {
  const [currRow, currCol, isBroken] = queue[head++];
  if (currRow === N - 1 && currCol === M - 1) {
    console.log(visited[currRow][currCol][isBroken]);
    process.exit();
  }

  for (const [dx, dy] of dirs) {
    const nextRow = currRow + dx;
    const nextCol = currCol + dy;

    if (N <= nextRow || nextRow < 0 || M <= nextCol || nextCol < 0) continue;

    const isWall = board[nextRow][nextCol] === 1;

    // 조건 1 - 인접 노드가 벽인 경우
    // 조건 2 - 해당 노드를 방문하지 않은 경우
    // 조건 3 - 현재까지 벽을 부수지 않은 경우
    if (isWall && !isBroken && !visited[nextRow][nextCol][1]) {
      visited[nextRow][nextCol][1] = visited[currRow][currCol][0] + 1;
      queue.push([nextRow, nextCol, 1]);
    }

    // 조건 1 - 인접 노드가 벽이 아닌 경우
    // 조건 2 - 해당 노드를 방문하지 않은 경우
    if (!isWall && !visited[nextRow][nextCol][isBroken]) {
      visited[nextRow][nextCol][isBroken] =
        visited[currRow][currCol][isBroken] + 1;
      queue.push([nextRow, nextCol, isBroken]);
    }
  }
}

console.log(-1);