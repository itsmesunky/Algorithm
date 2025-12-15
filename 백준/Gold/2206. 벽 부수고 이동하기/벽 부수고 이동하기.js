const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const infos = input.map((str) => str.replace("\r", "").split("").map(Number));

const dirs = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

let answer = Infinity;
const visited = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => Array(2).fill(0))
);

let head = 0;
const queue = [[0, 0, 0]];
visited[0][0][0] = 1;

while (head < queue.length) {
  const [currRow, currCol, isBroken] = queue[head++];

  if (currRow === N - 1 && currCol === M - 1) {
    answer = visited[currRow][currCol][isBroken];
    break;
  }

  for (let dir = 0; dir < 4; dir++) {
    const nextRow = currRow + dirs[dir][0];
    const nextCol = currCol + dirs[dir][1];

    if (nextRow < 0 || N <= nextRow || nextCol < 0 || M <= nextCol) continue;

    if (
      infos[nextRow][nextCol] === 0 &&
      visited[nextRow][nextCol][isBroken] === 0
    ) {
      visited[nextRow][nextCol][isBroken] =
        visited[currRow][currCol][isBroken] + 1;
      queue.push([nextRow, nextCol, isBroken]);
    }

    if (
      infos[nextRow][nextCol] === 1 &&
      isBroken === 0 &&
      visited[nextRow][nextCol][1] === 0
    ) {
      visited[nextRow][nextCol][1] = visited[currRow][currCol][isBroken] + 1;
      queue.push([nextRow, nextCol, 1]);
    }
  }
}

console.log(answer === Infinity ? -1 : answer);