const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const N = parseInt(input.shift());
const numbers = [0, ...input.shift().split(" ").map(Number)];
const paths = input.slice(1).map((str) => str.split(" ").map(Number));

const DP = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

for (let len = 1; len <= N; len++) {
  DP[len][len] = 1;
}

for (let len = 1; len <= N - 1; len++) {
  if (numbers[len] === numbers[len + 1]) {
    DP[len][len + 1] = 1;
  }
}

for (let len = 3; len <= N; len++) {
  for (let row = 1; row <= N - len + 1; row++) {
    if (numbers[row] === numbers[len + row - 1]) {
      if (DP[row + 1][len + row - 2] === 1) {
        DP[row][len + row - 1] = 1;
      }
    }
  }
}

const answer = [];
for (const [start, end] of paths) {
  answer.push(DP[start][end]);
}

console.log(answer.join("\n"));