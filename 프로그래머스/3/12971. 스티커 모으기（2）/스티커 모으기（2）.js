// 프로그래머스 스티커 모으기(2) - JS 풀이
function solution(sticker) {
  const n = sticker.length;
  if (n === 1) return sticker[0];
  if (n === 2) return Math.max(sticker[0], sticker[1]);

  // 선형 배열에 대한 집털이 DP (연속 금지)
  const linearMax = (arr) => {
    const m = arr.length;
    if (m === 0) return 0;
    if (m === 1) return arr[0];
    let prev2 = arr[0]; // dp[i-2]
    let prev1 = Math.max(arr[0], arr[1]); // dp[i-1]
    for (let i = 2; i < m; i++) {
      const cur = Math.max(prev1, prev2 + arr[i]);
      prev2 = prev1;
      prev1 = cur;
    }
    return prev1;
  };

  // 경우 1: 첫 스티커 선택 가능 (마지막 스티커 제외)
  const case1 = linearMax(sticker.slice(0, n - 1));
  // 경우 2: 첫 스티커 선택 불가 (첫 스티커 제외 — 마지막은 선택 가능)
  const case2 = linearMax(sticker.slice(1));

  return Math.max(case1, case2);
}
