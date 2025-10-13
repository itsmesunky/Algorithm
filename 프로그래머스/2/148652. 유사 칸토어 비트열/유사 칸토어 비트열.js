/**
* 문제 해결 시나리오
* 1. 각 레벨(A_N)의 비트열은 아래와 같음
* - A_0: '1'
* - A_1: '11011'
* - A_2: `${A_1} ${A_1} 0 ${A_1} ${A_1}`
* 1.1 즉, A_N: `${A_N-1} ${A_N-1} 0 ${A_N-1} ${A_N-1}` 형태의 5개의 세그먼트로 나눠짐
* 2. l, r값을 각 세그먼트의 범위와 비교하여 아래 로직 수행
* 2.1 세그먼트의 시작 인덱스가 r값보다 크거나 끝 인덱스가 l값보다 작으면 다음 세그먼트 탐색
* 2.2 세그먼트의 시작 인덱스가 l값보다 크거나 같고, 끝 인덱스가 r값보다 작거나 같으면 해당 세그먼트에서 '1'의 개수를 셈
* 2.3 2.1, 2.2가 아니면 해당 세그먼트에서 일부분만 겹치기 때문에 겹치는 부분에서 '1'의 개수를 셈
*/
const solution = (n, l, r) => {
    // 0-based
    const start = l - 1, end = r - 1;
    
    /**
    * getOneCount: 해당 세그먼트에 '1'이 몇 개 존재하는지 반환해주는 함수
    * @param {number} level: 현재 비트열의 레벨
    * @param {number} currentStart: 시작 위치
    * @param {number} currentEnd: 종료 위치
    * @returns {number}: 1의 개수
    */
    const getOneCount = (level, currentStart, currentEnd) => {
        if(level === 0) return 1;
        
        const len = currentEnd - currentStart + 1;
        // 몇 개의 세그먼트로 나눠지는지 확인
        const segmentLen = len / 5;
        
        let count = 0;
        
        for(let i = 0; i < 5; i++) {
            if(i === 2) continue;
            
            // 현재 세그먼트의 시작과 끝
            const nextStart = currentStart + (i * segmentLen);
            const nextEnd = nextStart + segmentLen - 1;
            
            // l과 r을 이용하여 범위 체크
            if(nextStart > end || nextEnd < start) continue;
            
            // 세그먼트가 찾고자 하는 범위 안에 포함일 시
            if(nextStart >= start && nextEnd <= end) {
                count += Math.pow(4, level - 1);
                continue;
            }
            
            // 겹치는 부분의 '1'의 개수만 세기
            count += getOneCount(level - 1, nextStart, nextEnd);
        }
        
        return count;
    }
    
    return getOneCount(n, 0, (5 ** n) - 1);
}