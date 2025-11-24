const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const A = input[0].trim();
const B = input[1].trim();

const n = A.length;
const m = B.length;

// DP 테이블 초기화
const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    if (A[i - 1] === B[j - 1]) {
      dp[i][j] = dp[i - 1][j - 1] + 1; // 문자가 같으면 왼쪽 대각선 + 1
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]); // 다르면 위/왼쪽 중 큰 값
    }
  }
}

console.log(dp[n][m]);