const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

let t = Number(input[0]);
let idx = 1;

while (t--) {
  const n = Number(input[idx++]);

  const top = input[idx++].split(" ").map(Number);
  const bottom = input[idx++].split(" ").map(Number);

  // dp[0][i] = i열 위 스티커 선택할 때 최대 점수
  // dp[1][i] = i열 아래 스티커 선택할 때 최대 점수
  const dp = Array.from({ length: 2 }, () => Array(n).fill(0));

  dp[0][0] = top[0];
  dp[1][0] = bottom[0];

  if (n > 1) {
    dp[0][1] = dp[1][0] + top[1];
    dp[1][1] = dp[0][0] + bottom[1];
  }

  for (let i = 2; i < n; i++) {
    dp[0][i] = Math.max(dp[1][i - 1], dp[1][i - 2]) + top[i];
    dp[1][i] = Math.max(dp[0][i - 1], dp[0][i - 2]) + bottom[i];
  }

  console.log(Math.max(dp[0][n - 1], dp[1][n - 1]));
}
