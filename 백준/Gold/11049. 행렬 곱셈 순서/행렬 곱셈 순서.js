const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const matrix = input.slice(1).map(line => line.split(' ').map(Number));

// dp[i][j]: i번째 행렬부터 j번째 행렬까지 곱하는 최소 비용
const dp = Array.from({ length: N }, () => new Array(N).fill(0));

// len은 곱할 행렬의 개수 (2개부터 N개까지)
for (let len = 1; len < N; len++) {
  // i는 시작 행렬 인덱스
  for (let i = 0; i < N - len; i++) {
    const j = i + len; // j는 끝 행렬 인덱스
    dp[i][j] = Infinity;

    // k는 i와 j 사이의 분기점
    for (let k = i; k < j; k++) {
      // 행렬 A(r1*c1)와 B(r2*c2)를 곱할 때 연산 횟수는 r1 * c1 * c2
      // 여기서는 matrix[i][0] (첫 행렬의 행), matrix[k][1] (왼쪽 그룹 마지막의 열), matrix[j][1] (오른쪽 그룹 마지막의 열)
      const cost = dp[i][k] + dp[k + 1][j] + (matrix[i][0] * matrix[k][1] * matrix[j][1]);
      
      if (dp[i][j] > cost) {
        dp[i][j] = cost;
      }
    }
  }
}

console.log(dp[0][N - 1]);