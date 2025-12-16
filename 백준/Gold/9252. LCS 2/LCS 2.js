const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const [strA, strB] = input.map((str) => str.replace("\r", ""));

const R = strA.length;
const C = strB.length;

const dp = Array.from({ length: R + 1 }, () => Array(C + 1).fill(0));

for (let row = 1; row <= R; row++) {
  for (let col = 1; col <= C; col++) {
    if (strA[row - 1] === strB[col - 1]) {
      dp[row][col] = dp[row - 1][col - 1] + 1;
    } else {
      dp[row][col] = Math.max(dp[row - 1][col], dp[row][col - 1]);
    }
  }
}

const length = dp[R][C];
console.log(length);
if (length === 0) return;

// 역추적
const answer = [];
let row = R;
let col = C;
while (0 < row && 0 < col) {
  if (dp[row][col] === dp[row - 1][col]) {
    row--;
  } else if (dp[row][col] === dp[row][col - 1]) {
    col--;
  } else {
    answer.push(strB[col - 1]);
    row--;
    col--;
  }
}

console.log(answer.reverse().join(""));
