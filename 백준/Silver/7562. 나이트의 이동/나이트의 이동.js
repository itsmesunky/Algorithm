const input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

// 입력값
const T = parseInt(input.shift());

const infos = [];

for (let i = 0; i < 3 * T; i += 3) {
  const group = input.slice(i, i + 3).map((value, j) => {
    if (j === 0) {
      return parseInt(value);
    } else {
      return value.replace("\r", "").split(" ").map(Number);
    }
  });

  infos.push(group);
}

// ↖↗↙↘
const dirs = [
  [
    [-2, -1],
    [-1, -2],
  ],
  [
    [-2, 1],
    [-1, 2],
  ],
  [
    [2, -1],
    [1, -2],
  ],
  [
    [2, 1],
    [1, 2],
  ],
];

for (const [l, begin, end] of infos) {
  const visited = Array.from({ length: l }, () => Array(l).fill(false));
  visited[begin[0]][begin[1]] = true;

  let head = 0;
  const queue = [[...begin, 0]];

  while (head < queue.length) {
    const [currR, currC, count] = queue[head++];

    if (currR === end[0] && currC === end[1]) {
      console.log(count);
      break;
    }

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 2; j++) {
        const nextR = currR + dirs[i][j][0];
        const nextC = currC + dirs[i][j][1];

        // 가장자리 감지
        if (nextR < 0 || l <= nextR || nextC < 0 || l <= nextC) continue;
        if (!visited[nextR][nextC]) {
          visited[nextR][nextC] = true;
          queue.push([nextR, nextC, count + 1]);
        }
      }
    }
  }
}
