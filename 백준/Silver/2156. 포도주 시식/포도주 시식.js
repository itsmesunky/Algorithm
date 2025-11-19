const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 입력값
const n = parseInt(input[0]); // 포도주 잔의 갯수
const wines = input.slice(1).map(Number);

if (n === 1) {
  console.log(wines[0]);
  return;
}

if (n === 2) {
  console.log(wines[0] + wines[1]);
  return;
}

// DP 테이블 정의
// dp[i] = i번째 포도주까지 고려(마시거나 마시지 않거나)했을 때의 최댓값
const dp = Array(n).fill(0);

// 초기값 정의
dp[0] = wines[0];
dp[1] = wines[0] + wines[1];
dp[2] = Math.max(dp[1], wines[0] + wines[2], wines[1] + wines[2]);

// 점화식
for (let i = 3; i < n; i++) {
  dp[i] = Math.max(
    dp[i - 1], // i번째 포도주를 마시지 않는 경우
    dp[i - 2] + wines[i], // i번째 포도주를 마시되 직전 포도주를 마시지 않는 경우
    dp[i - 3] + wines[i - 1] + wines[i] // i번째 포도주를 마시되 직전 포도주를 마시는 경우
  );
}

console.log(dp[n - 1]);
