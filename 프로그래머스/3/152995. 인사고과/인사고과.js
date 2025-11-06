const solution = (scores) => {
    const [wanhoA, wanhoB] = scores[0];
    const wanhoTotal = wanhoA + wanhoB;
    let maxB = 0; // 지금까지 등장한 동료 평가 점수(B)의 최댓값

    // 1. 효율적인 정렬 (O(N log N))
    // - 근무 태도 점수(A)는 내림차순 (wanhoA)
    // - 동점일 경우, 동료 평가 점수(B)는 오름차순 (wanhoB)
    scores.sort((a, b) => {
        if (a[0] !== b[0]) {
            return b[0] - a[0]; // A 내림차순
        }
        return a[1] - b[1]; // A가 같으면 B 오름차순
    });

    // 2. 인센티브 제외 대상 판별 및 완호 순위 계산 (O(N))
    let rank = 1;

    for (const [a, b] of scores) {
        // 지금까지 등장한 B 점수의 최댓값 갱신
        if (b > maxB) {
            maxB = b;
        }

        // 인센티브 제외 조건: 현재 사원의 B 점수가 maxB보다 작다면, 
        // 이 사원은 (A 점수가 같거나 높은) 다른 사원에게 두 점수 모두 밀리는 것
        if (b < maxB) {
            // 만약 완호가 인센티브 제외 대상이라면 -1 반환
            if (a === wanhoA && b === wanhoB) {
                return -1;
            }
            // 인센티브 제외 대상이므로 순위 계산에서 제외
            continue; 
        }

        // 인센티브 제외 대상이 아닌 사원들만 순위 계산에 참여
        if (a + b > wanhoTotal) {
            rank++;
        }
    }
    
    return rank;
}