const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(/\r?\n/);

const N = Number(input[0]);
const M = Number(input[1]);

const stuff = input[2].split(" ").map(Number).sort((a, b) => a - b);

let lt = 0;
let rt = N - 1;
let answer = 0;

while (lt < rt) {
  const sum = stuff[lt] + stuff[rt];
  if (sum < M) {
    lt++;
  } else if (M < sum) {
    rt--;
  } else {
    lt++;
    rt--;
    answer++;
  }
}

console.log(answer);