const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split(" ").map(Number);

input.pop(); // 마지막 0 제거
const n = input.length;
const INF = 1e9;

// dp[l][r] = 현재 단계에서의 최소 비용
let dp = Array.from({ length: 5 }, () =>
  Array(5).fill(INF)
);

// 시작 상태: 양발 중앙
dp[0][0] = 0;

function cost(from, to) {
  if (from === to) return 1;
  if (from === 0) return 2;
  if (Math.abs(from - to) === 2) return 4;
  return 3;
}

for (let i = 0; i < n; i++) {
  const next = input[i];
  const newDp = Array.from({ length: 5 }, () =>
    Array(5).fill(INF)
  );

  for (let l = 0; l <= 4; l++) {
    for (let r = 0; r <= 4; r++) {
      if (dp[l][r] === INF) continue;

      // 왼발 이동
      newDp[next][r] = Math.min(
        newDp[next][r],
        dp[l][r] + cost(l, next)
      );

      // 오른발 이동
      newDp[l][next] = Math.min(
        newDp[l][next],
        dp[l][r] + cost(r, next)
      );
    }
  }

  dp = newDp;
}

// 최소값 찾기
let answer = INF;
for (let l = 0; l <= 4; l++) {
  for (let r = 0; r <= 4; r++) {
    answer = Math.min(answer, dp[l][r]);
  }
}

console.log(answer);