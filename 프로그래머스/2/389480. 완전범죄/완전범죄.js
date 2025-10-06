function solution(info, n, m) {
    const INF = n + 1; // n 이상의 값은 '잡힘'으로 간주할 수 있는 무한대 값
    const totalItems = info.length;

    // dp[i][j] : i번째 물건까지 훔쳤고, B의 누적 흔적이 j일 때, A의 누적 흔적 최솟값
    // B의 흔적은 m 미만이어야 하므로 m 크기의 배열
    let dp = Array(m).fill(INF); 
    dp[0] = 0; // 초기값: 0개의 물건, B 흔적 0, A 흔적 0

    // 물건 개수만큼 반복
    for (let i = 0; i < totalItems; i++) {
        const [traceA, traceB] = info[i]; // 현재 물건을 훔칠 때의 A, B 흔적
        const nextDp = Array(m).fill(INF);

        // B의 이전 누적 흔적(prevB)을 순회
        for (let prevB = 0; prevB < m; prevB++) {
            if (dp[prevB] === INF) continue; // 불가능한 상태는 건너뜀

            // 1. A 도둑이 훔치는 경우
            const nextA_A = dp[prevB] + traceA;
            const nextB_A = prevB;
            
            // A가 안 잡히는 경우 (n 미만)
            if (nextA_A < n) {
                // nextDp[nextB_A]는 A 흔적의 최솟값을 저장
                nextDp[nextB_A] = Math.min(nextDp[nextB_A], nextA_A);
            }

            // 2. B 도둑이 훔치는 경우
            const nextA_B = dp[prevB];
            const nextB_B = prevB + traceB;
            
            // B가 안 잡히는 경우 (m 미만)
            if (nextB_B < m) {
                // nextDp[nextB_B]는 A 흔적의 최솟값을 저장
                nextDp[nextB_B] = Math.min(nextDp[nextB_B], nextA_B);
            }
        }
        dp = nextDp; // 다음 상태로 업데이트
    }

    // 최종적으로 가능한 A 흔적의 최솟값 찾기
    const minATrace = Math.min(...dp);

    // 가능한 경우가 없다면 -1 반환, 아니면 최솟값 반환
    return minATrace === INF ? -1 : minATrace;
}