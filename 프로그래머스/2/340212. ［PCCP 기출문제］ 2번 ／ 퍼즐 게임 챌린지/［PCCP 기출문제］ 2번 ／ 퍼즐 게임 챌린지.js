function solution(diffs, times, limit) {
    // 주어진 숙련도로 모든 퍼즐을 제한 시간 내에 풀 수 있는지 확인하는 함수
    const check = (level) => {
        let total_time = 0;
        let time_prev = 0;

        for (let i = 0; i < diffs.length; i++) {
            const diff = diffs[i];
            const time_cur = times[i];

            if (diff > level) {
                const fail_count = diff - level;
                total_time += fail_count * (time_cur + time_prev) + time_cur;
            } else {
                total_time += time_cur;
            }

            // 제한 시간을 초과하면 더 이상 계산할 필요 없음
            if (total_time > limit) {
                return false;
            }

            time_prev = time_cur;
        }

        return true;
    };

    let low = 1;
    let high = 2000000000; // 충분히 큰 값으로 설정
    let answer = high;

    // 이분 탐색으로 최소 숙련도 찾기
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (check(mid)) {
            // mid 숙련도로 가능하면, 더 낮은 숙련도도 가능한지 탐색
            answer = mid;
            high = mid - 1;
        } else {
            // mid 숙련도로 불가능하면, 더 높은 숙련도가 필요
            low = mid + 1;
        }
    }

    return answer;
}