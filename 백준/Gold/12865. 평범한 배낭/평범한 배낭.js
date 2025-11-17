const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, K] = input[0].split(" ").map(Number);
const items = input.slice(1).map(str => str.split(" ").map(Number));

const dp = Array(K + 1).fill(0);

for (let i = 0; i < N; i++) {
  const [w, v] = items[i];

  for (let weight = K; weight >= w; weight--) {
    dp[weight] = Math.max(dp[weight], dp[weight - w] + v);
  }
}

console.log(dp[K]);