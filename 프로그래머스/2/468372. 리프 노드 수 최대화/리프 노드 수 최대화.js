function solution(dist_limit, split_limit) {
    const S = split_limit;
    let max_leaves = 1;

    // 분배 계수(2와 3)의 조합을 모두 탐색 (단, 순서는 2를 먼저, 3을 나중에 쓰는 것이 항상 최적)
    // 3^18 <= 10^9, 2^29 <= 10^9 이므로 반복문은 최대 약 570번만 실행됨
    for (let N3 = 0; 3 ** N3 <= S; N3++) {
        for (let N2 = 0; (3 ** N3) * (2 ** N2) <= S; N2++) {
            
            let P = 1; // 현재 깊이까지의 분배도 (동시에 현재 깊이의 가용 노드 수)
            let D = dist_limit; // 남은 분배 노드 허용 개수
            let valid = true;

            // 1. 자식을 2개씩 분배하는 층을 N2번 강제 진행
            for (let i = 0; i < N2; i++) {
                if (P >= D) { valid = false; break; } // 남은 D보다 가용 노드가 크면 조기 종료
                D -= P;
                P *= 2;
            }
            if (!valid) continue; // 이 조합은 가용량을 초과하여 진행 불가 (더 짧은 조합에서 처리됨)

            // 2. 자식을 3개씩 분배하는 층을 N3번 강제 진행
            for (let i = 0; i < N3; i++) {
                if (P >= D) { valid = false; break; }
                D -= P;
                P *= 3;
            }
            if (!valid) continue;

            // 3. 정해진 조합을 다 쓰고도 D가 남았다면, 남은 D를 그리디하게 소진
            while (D > 0) {
                if (P >= D) {
                    // 가용 노드 수가 남은 D보다 많거나 같다면, 남은 D를 모두 가장 효율 좋은 분배 노드로 변환 후 종료
                    let c_best = 0;
                    if (P * 3 <= S) c_best = 3;
                    else if (P * 2 <= S) c_best = 2;

                    if (c_best > 0) {
                        max_leaves = Math.max(max_leaves, P + D * (c_best - 1));
                    } else {
                        max_leaves = Math.max(max_leaves, P);
                    }
                    break;
                } else {
                    // 가용 노드 수(P)가 남은 D보다 적다면, 가용 노드 전부를 분배 노드로 변환
                    let c_best = 0;
                    if (P * 3 <= S) c_best = 3;
                    else if (P * 2 <= S) c_best = 2;

                    if (c_best > 0) {
                        D -= P;
                        P *= c_best;
                    } else {
                        // 더 이상 분배도를 키울 수 없다면 종료
                        max_leaves = Math.max(max_leaves, P);
                        break; 
                    }
                }
            }
            
            // D를 딱 맞게 다 소진한 경우의 리프 노드 계산
            if (D === 0) {
                max_leaves = Math.max(max_leaves, P);
            }
        }
    }

    return max_leaves;
}