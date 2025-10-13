/**
 * @param {number} n n번째 유사 칸토어 비트열
 * @param {number} l 시작 인덱스 (1-based)
 * @param {number} r 끝 인덱스 (1-based)
 * @returns {number} l부터 r까지의 '1'의 개수
 */
const solution = (n, l, r) => {
    // 1-based 인덱스를 0-based 인덱스로 변환
    const start = l - 1;
    const end = r - 1;

    /**
     * @param {number} level 현재 비트열의 n 값 (A_n)
     * @param {bigint} currentStart 현재 A_level이 시작하는 0-based 전역 인덱스
     * @param {bigint} currentEnd 현재 A_level이 끝나는 0-based 전역 인덱스
     * @returns {number} 현재 A_level 내에서 [start, end] 범위에 포함된 '1'의 개수
     */
    const getOneCount = (level, currentStart, currentEnd) => {
        // 1. 기저 조건: n=0일 때 (A_0 = "1")
        if (level === 0) {
            // A_0은 항상 '1'이므로, 범위에 포함되면 1 반환
            return 1;
        }

        // 현재 비트열 A_level의 길이
        // 5^level은 매우 커질 수 있으므로 BigInt 사용
        const len = currentEnd - currentStart + 1;
        const segmentLen = len / 5;

        let count = 0;

        // A_level은 (A_{level-1}, A_{level-1}, 00000, A_{level-1}, A_{level-1})로 구성됨
        for (let i = 0; i < 5; i++) {
            // i=2, 즉 세 번째 구역은 모두 0이므로 건너뛴다.
            if (i === 2) continue;

            const nextStart = currentStart + segmentLen * i;
            const nextEnd = nextStart + segmentLen - 1;

            // 2. 가지치기 (현재 구역이 목표 범위 [start, end]와 전혀 겹치지 않으면 무시)
            if (nextEnd < start || nextStart > end) {
                continue;
            }

            // 3. 포함 관계 확인 및 재귀 호출

            // 3-A. 현재 구역이 목표 범위에 완전히 포함되는 경우
            // 예: start=10, end=20, nextStart=12, nextEnd=15
            if (nextStart >= start && nextEnd <= end) {
                // 이 구역(A_{level-1}) 전체의 1의 개수를 구함
                // A_k의 1의 개수는 4^(k) 이다.
                count += Math.pow(4, level - 1);
                continue;
            }

            // 3-B. 현재 구역과 목표 범위가 부분적으로 겹치는 경우
            // 재귀 호출: 겹치는 부분만 범위로 좁혀서 다음 레벨로 이동
            count += getOneCount(
                level - 1,
                nextStart,
                nextEnd,
            );
        }

        return count;
    };

    // 초기 호출: A_n 전체 (0부터 5^n - 1) 내에서 [start, end] 범위의 1의 개수를 구한다.
    return getOneCount(n, 0, 5 ** n - 1);
};