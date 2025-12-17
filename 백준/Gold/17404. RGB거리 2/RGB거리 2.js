const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input.shift());
const cost = input.map((str) => str.split(" ").map(Number));

const INF = 1000 * 1000 + 1;
let answer = INF;

for (let firstColor = 0; firstColor < 3; firstColor++) {
  const dp = Array.from({ length: N }, () => Array(3).fill(0));

  for (let i = 0; i < 3; i++) {
    if (i === firstColor) {
      dp[0][i] = cost[0][i];
    } else {
      dp[0][i] = INF;
    }
  }

  for (let i = 1; i < N; i++) {
    dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + cost[i][0];
    dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + cost[i][1];
    dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + cost[i][2];
  }

  for (let lastColor = 0; lastColor < 3; lastColor++) {
    if (firstColor === lastColor) continue; // 첫 집 색과 같으면 패스
    answer = Math.min(answer, dp[N - 1][lastColor]);
  }
}

console.log(answer);