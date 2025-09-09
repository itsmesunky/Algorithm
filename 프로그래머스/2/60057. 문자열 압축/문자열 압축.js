/**
* 문제 해결 시나리오
* 1. 완전탐색으로 주어지는 문자열 s를 모든 경우의 수로 압축 실행
* 2. 제일 작은 문자열로 압축 될 때의 길이를 반환
*/
const solution = (s) => {
    const len = s.length;
    let answer = len;
    
    for(let i = 1; i <= Math.floor(len / 2); i++) { // 압축 단위
        // 압축 결과 문자열
        let result = '';
        let prev = s.slice(0, i);
        let count = 1;
        
        for(let j = i; j < len; j += i ) { // 압축 시작 지점
            const curr = s.slice(j, i + j);
            
            if(prev === curr) {
                count++;
            } else {
                result += (count > 1 ? count : "") + prev;
                prev = curr;
                count = 1;
            }
        }
        
        result += (count > 1 ? count : "") + prev;
        
        answer = Math.min(answer, result.length);
    }
    
    return answer;
}