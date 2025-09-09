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
        
        const stack = [s.slice(0, i)];
        
        for(let j = i; j < len; j += i ) { // 압축 시작 지점
            const sLen = stack.length;
            const prev = stack.at(-1);
            const curr = s.slice(j, i + j);
            
            if(prev === curr) {
                stack.push(curr);
            } else {
                if(sLen > 1) {
                    result += sLen;
                }
                result += prev;
                stack.length = 0;
                stack.push(curr);
            }
        }
        
        const sLen = stack.length;
        
        if(sLen) {
            if(sLen > 1) {
                result += sLen;
            }
            result += stack.at(-1);
        }
        
        answer = Math.min(answer, result.length);
    }
    
    return answer;
}