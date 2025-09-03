/**
* isCorrect: 소괄호로 이루어진 문자열이 올바른 괄호인지 판별해주는 함수
* @param(str): 소괄호로만 이루어진 문자열
* @return boolean
*/
const isCorrect = (str) => {
    const stack = [];
    
    for(const char of str) {
        if(char === '(') {
            stack.push(char);
        } else {
            if(stack.length) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    
    return stack.length ? false : true;
}

const solution = (p) => {
    // 1. 문자열 p가 올바른 괄호 문자열인 경우
    if(isCorrect(p)) return p;
    
    const recursive = (w) => {
        // 1. 입력이 빈 문자열인 경우, 빈 문자열을 반환합니다. 
        if(!w) return w;
        
        // 2. 문자열 w를 두 "균형잡힌 괄호 문자열" u, v로 분리합니다.
        // 단, u는 "균형잡힌 괄호 문자열"로 더 이상 분리할 수 없어야 하며, v는 빈 문자열이 될 수 있습니다.
        const obj = {
            '(': 0,
            ')': 0
        };
        
        let u = '';
        let v = '';
        let pos = 0;
        
        // 객체를 활용해 균형잡힌 괄호 문자열인지 확인
        while(!(obj['('] && obj['('] === obj[')'])) {
            u += w[pos];
            obj[w[pos]]++;
            pos++;
        }
        
        v = w.slice(pos);
        
        // 3. 문자열 u가 "올바른 괄호 문자열" 이라면 문자열 v에 대해 1단계부터 다시 수행합니다. 
        // 3-1. 수행한 결과 문자열을 u에 이어 붙인 후 반환합니다. 
        if(isCorrect(u)) {
            return u + recursive(v);
        } else {
            return '(' + recursive(v) + ')' + u.slice(1, u.length - 1).replaceAll(/[\(\)]/g, match => match === '(' ? ')' : '(')
        }
    }
    
    return recursive(p);
}