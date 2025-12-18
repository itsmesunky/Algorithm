const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const N = parseInt(input.shift());
const costs = input.map((str) => str.split(" ").map(Number));

const COLORS = 3;

let answer = Infinity;

for (let firstColor = 0; firstColor < COLORS; firstColor++) {
  const DP = Array.from({ length: N }, () => Array(COLORS).fill(0));

  // 첫 번째 집의 고정 색 제외 선택 못하도록 나머지 색 비용 Infinity 처리
  for (let i = 0; i < COLORS; i++) {
    if (firstColor === i) DP[0][i] = costs[0][i];
    else DP[0][i] = Infinity;
  }

  for (let row = 1; row < N; row++) {
    DP[row][0] = Math.min(DP[row - 1][1], DP[row - 1][2]) + costs[row][0];
    DP[row][1] = Math.min(DP[row - 1][0], DP[row - 1][2]) + costs[row][1];
    DP[row][2] = Math.min(DP[row - 1][0], DP[row - 1][1]) + costs[row][2];
  }

  for (let lastColor = 0; lastColor < COLORS; lastColor++) {
    if (firstColor === lastColor) continue;
    answer = Math.min(answer, DP[N - 1][lastColor]);
  }
}

console.log(answer);