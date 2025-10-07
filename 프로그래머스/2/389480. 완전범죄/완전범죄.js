function solution(info, n, m) {
  // n: A가 잡히는 기준 (A의 흔적이 n 이상이면 잡힘)
  // m: B가 잡히는 기준
  // info: [[a1,b1], [a2,b2], ...] (각 값은 1~3)
  
  // dp[a][b] = 이 시점에서 A가 a, B가 b인 상태가 가능한지 여부
  // a ranges 0..n-1, b ranges 0..m-1 (이상이면 잡히므로 상태로 보지 않음)
  const dp = Array.from({ length: n }, () => new Array(m).fill(false));
  dp[0][0] = true;

  for (let idx = 0; idx < info.length; idx++) {
    const [addA, addB] = info[idx];
    const next = Array.from({ length: n }, () => new Array(m).fill(false));

    for (let a = 0; a < n; a++) {
      for (let b = 0; b < m; b++) {
        if (!dp[a][b]) continue;

        // A가 훔치는 경우
        const na = a + addA;
        if (na < n) next[na][b] = true;

        // B가 훔치는 경우
        const nb = b + addB;
        if (nb < m) next[a][nb] = true;
      }
    }

    // 다음 단계로 진행
    for (let a = 0; a < n; a++) {
      for (let b = 0; b < m; b++) {
        dp[a][b] = next[a][b];
      }
    }
  }

  // 모든 물건을 훔친 뒤 가능한 상태들 중 b < m 인 상태에서 a의 최소값 찾기
  let ans = Infinity;
  for (let a = 0; a < n; a++) {
    for (let b = 0; b < m; b++) {
      if (dp[a][b]) {
        ans = Math.min(ans, a);
      }
    }
  }

  return ans === Infinity ? -1 : ans;
}
