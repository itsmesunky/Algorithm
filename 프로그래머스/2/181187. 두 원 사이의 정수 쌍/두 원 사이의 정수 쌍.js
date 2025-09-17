/**
* 문제 해결 시나리오
* 1. 2차원 좌표에서 원점 (0, 0)으로부터 유클리드 거리가 r1 이상 r2 이하인 지점의 개수를 구하여 반환하면 됨
*/
const solution = (r1, r2) => {
    let answer = 0;
    
    // x축 기준(1 ~ r2)으로 각 x축에 대해 최대 y값 구하기
    for(let x = 1; x <= r2; x++) {
        const yMin = Math.ceil(Math.sqrt(r1 ** 2 - x ** 2)) || 0;
        const yMax = Math.floor(Math.sqrt(r2 ** 2 - x ** 2));
        
        answer += (yMax - yMin) + 1;
    }
    
    // 4분면 계산
    answer *= 4;
    
    return answer;
}
