/**
* 문제 해결 시나리오
* 1. targets 각 원소들을 0번째 인덱스 기준으로 오름차순
* 2. 요격 미사일 발사 시, 요격 가능한 구간 기록
* 3. 그 구간과 같거나 큰 폭격 미사일 발견 시 요격 미사일 추가
*/
const solution = (targets) => {
    let count = 0;
    
    // 특정 요격 미사일이 요격 가능한 마지막 구간
    let lastPoint = -1;
    
    const sorted = [...targets].sort((a, b) => a[1] - b[1]);
    
    for(const [s, e] of sorted) {
        if(lastPoint <= s) {
            count++;
            lastPoint = e;
        }
    }
    
    return count;
}