function solution(stones, k) {
    let left = 1;
    let right = 200000000; // 문제 제한: 최대 2억 명까지 가능
    let answer = 0;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        let skip = 0;
        let canCross = true;
        
        for (let stone of stones) {
            if (stone - mid < 0) {
                skip += 1;
                if (skip >= k) {
                    canCross = false;
                    break;
                }
            } else {
                skip = 0;
            }
        }
        
        if (canCross) {
            // mid 명이 건널 수 있음 → 더 많은 사람 가능성 탐색
            answer = mid;
            left = mid + 1;
        } else {
            // mid 명은 불가능 → 더 적게 시도
            right = mid - 1;
        }
    }
    
    return answer;
}
