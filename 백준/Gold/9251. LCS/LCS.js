const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 입력값
const A = input[0].trim();
const B = input[1].trim();

const row = A.length;
const col = B.length;

const dp = Array.from({ length: row + 1 }, () => Array(col + 1).fill(0));

for (let i = 1; i <= row; i++) {
  for (let j = 1; j <= col; j++) {
    if (A[i - 1] === B[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
    else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
  }
}

console.log(dp[row][col]);
