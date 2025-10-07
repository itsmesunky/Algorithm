/**
 * @param {number[][]} info - 각 물건 [A 흔적, B 흔적] 정보
 * @param {number} n - A도둑이 붙잡히는 최소 흔적 누적 개수
 * @param {number} m - B도둑이 붙잡히는 최소 흔적 누적 개수
 * @returns {number} - 두 도둑 모두 붙잡히지 않고 모든 물건을 훔쳤을 때 A 흔적의 최솟값, 불가능하면 -1
 */
function solution(info, n, m) {
    // DP 테이블 초기화
    // dp[i][j]: B도둑의 누적 흔적이 i일 때, A도둑의 최소 누적 흔적 (단, A도둑의 흔적은 n 미만이어야 함)
    // B도둑의 흔적은 0부터 m-1까지 가능하므로 크기는 m
    const MAX_VALUE = Infinity;
    let dp = new Array(m).fill(MAX_VALUE);
    
    // 초기 상태: 물건을 0개 훔쳤을 때, A흔적 0, B흔적 0
    dp[0] = 0;

    // 물건을 순서대로 하나씩 고려
    for (const [traceA, traceB] of info) {
        // 현재 물건까지 고려했을 때의 새로운 DP 테이블
        let nextDp = new Array(m).fill(MAX_VALUE);

        // 이전 상태(B 흔적 i)를 순회하며 다음 상태를 계산
        for (let i = 0; i < m; i++) {
            // 현재 i가 도달 불가능한 상태라면 건너뜀
            if (dp[i] === MAX_VALUE) {
                continue;
            }

            // 1. i번째 물건을 A도둑이 훔치는 경우
            const newA_A = dp[i] + traceA; // A의 새 흔적
            const newB_A = i;             // B의 새 흔적 (변화 없음)
            
            // A도둑이 붙잡히지 않는 경우 (흔적 < n)
            if (newA_A < n) {
                // A도둑의 새 흔적(newA_A)이 현재 nextDp[newB_A]에 저장된 값보다 작으면 갱신
                nextDp[newB_A] = Math.min(nextDp[newB_A], newA_A);
            }
            
            // 2. i번째 물건을 B도둑이 훔치는 경우
            const newA_B = dp[i];         // A의 새 흔적 (변화 없음)
            const newB_B = i + traceB;    // B의 새 흔적
            
            // B도둑이 붙잡히지 않는 경우 (흔적 < m)
            if (newB_B < m) {
                // A도둑의 새 흔적(newA_B)이 현재 nextDp[newB_B]에 저장된 값보다 작으면 갱신
                nextDp[newB_B] = Math.min(nextDp[newB_B], newA_B);
            }
        }
        
        // 다음 계산을 위해 현재 DP 테이블 갱신
        dp = nextDp;
    }

    // 모든 물건을 훔친 후, A흔적의 최솟값을 찾음
    // dp 배열에는 B흔적이 0부터 m-1일 때의 A흔적 최솟값이 저장되어 있음.
    let minA_Trace = Math.min(...dp);

    // 최솟값이 MAX_VALUE이면 모든 물건을 훔칠 수 있는 방법이 없다는 의미
    return minA_Trace === MAX_VALUE ? -1 : minA_Trace;
}