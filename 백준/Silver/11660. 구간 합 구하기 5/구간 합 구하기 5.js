const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 입력값
const N = parseInt(input[0]);

const originArr = input
  .slice(1, 1 + N)
  .map((str) => str.split(" ").map(Number));

// 누적합 배열
const prefixSumArr = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));
// 좌표 배열
const arr = input.slice(1 + N).map((str) => str.split(" ").map(Number));

for (let row = 1; row <= N; row++) {
  for (let col = 1; col <= N; col++) {
    const top = prefixSumArr[row - 1][col]; // 위
    const left = prefixSumArr[row][col - 1]; // 왼
    const topLeft = prefixSumArr[row - 1][col - 1]; // 왼쪽 대각선
    prefixSumArr[row][col] = top + left - topLeft + originArr[row - 1][col - 1];
  }
}

for (const [x1, y1, x2, y2] of arr) {
  const result =
    prefixSumArr[x2][y2] -
    prefixSumArr[x2][y1 - 1] -
    prefixSumArr[x1 - 1][y2] +
    prefixSumArr[x1 - 1][y1 - 1];

  console.log(result);
}
