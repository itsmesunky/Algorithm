const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(" ").map(Number);

// 마지막 0 제거
input.pop();

const n = input.length;
const INF = 1e9;

// dp[l][r] = 현재 단계에서의 최소 비용
let dp = Array.from({ length: 5 }, () => Array(5).fill(INF));
dp[0][0] = 0;

// 힘 계산 함수
function cost(from, to) {
  if (from === to) return 1;
  if (from === 0) return 2;
  if (Math.abs(from - to) === 2) return 4;
  return 3;
}

for (const next of input) {
  const nextDp = Array.from({ length: 5 }, () => Array(5).fill(INF));

  for (let l = 0; l < 5; l++) {
    for (let r = 0; r < 5; r++) {
      if (dp[l][r] === INF) continue;

      // 왼발 이동
      nextDp[next][r] = Math.min(
        nextDp[next][r],
        dp[l][r] + cost(l, next)
      );

      // 오른발 이동
      nextDp[l][next] = Math.min(
        nextDp[l][next],
        dp[l][r] + cost(r, next)
      );
    }
  }

  dp = nextDp;
}

let answer = INF;
for (let l = 0; l < 5; l++) {
  for (let r = 0; r < 5; r++) {
    answer = Math.min(answer, dp[l][r]);
  }
}

console.log(answer);
