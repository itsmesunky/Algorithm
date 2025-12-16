const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const [N, S] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number);

const prefixSum = Array(N + 1).fill(0);

for (let i = 1; i <= N; i++) {
  prefixSum[i] = prefixSum[i - 1] + numbers[i - 1];
}

let answer = Infinity;
let lt = 1;
let rt = 1;

while (lt <= rt && rt <= N) {
  const sum = prefixSum[rt] - prefixSum[lt - 1];
  if (sum < S) {
    rt++;
  } else if (S <= sum) {
    answer = Math.min(answer, rt - lt + 1);
    lt++;
  }
}

console.log(answer === Infinity ? 0 : answer);