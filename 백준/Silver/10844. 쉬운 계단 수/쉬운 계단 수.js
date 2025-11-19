const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 입력값
const n = parseInt(input[0]); // 포도주 잔의 갯수

const MOD = 1_000_000_000;

// dp[i][d] = 길이가 i이고 마지막 자리가 d인 계단수 개수
const dp = Array.from({ length: n + 1 }, () => Array(10).fill(0));

// 초기값: 길이가 1일 때
for (let d = 1; d <= 9; d++) {
  dp[1][d] = 1;
}

// 점화식 적용
for (let i = 2; i <= n; i++) {
  for (let d = 0; d <= 9; d++) {
    if (d === 0) {
      dp[i][0] = dp[i - 1][1] % MOD;
    } else if (d === 9) {
      dp[i][9] = dp[i - 1][8] % MOD;
    } else {
      dp[i][d] = (dp[i - 1][d - 1] + dp[i - 1][d + 1]) % MOD;
    }
  }
}

// 최종 합
let answer = dp[n].reduce((a, b) => (a + b) % MOD, 0);

console.log(answer);
