const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number); // 물품 수, 배낭 무게
const items = input.slice(1).map((str) => str.split(" ").map(Number));

const dp = Array(K + 1).fill(0);

for (let i = 0; i < N; i++) {
  const [weight, value] = items[i];

  for (let j = K; j >= weight; j--) {
    dp[j] = Math.max(dp[j], dp[j - weight] + value);
  }
}

console.log(dp[K]);
