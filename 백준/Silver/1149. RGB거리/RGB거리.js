const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

  const N = parseInt(input[0]); // 집의 수
  const dp = input.slice(1).map(str => str.split(" ").map(Number));

for(let row = 1; row < N; row++) {
    dp[row][0] += Math.min(dp[row - 1][1], dp[row-1][2]);
    dp[row][1] += Math.min(dp[row - 1][0], dp[row-1][2]);
    dp[row][2]+= Math.min(dp[row - 1][0], dp[row-1][1]);
}

console.log(Math.min(...dp.at(-1)));