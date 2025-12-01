const input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

// 입력값
const C = parseInt(input.shift().split(" ")[0]);
const arr = input.map((str) => str.split(" ").map(Number));

// dp[i] = i명을 유치하기 위해 필요한 최소 비용
const dp = Array(C + 1).fill(Infinity);
dp[0] = 0;

for (const [amount, count] of arr) {
  for (let i = 1; i <= C; i++) {
    if (i < count) {
      dp[i] = Math.min(dp[i], amount);
    } else {
      dp[i] = Math.min(dp[i], dp[i - count] + amount);
    }
  }
}

console.log(dp[C]);
