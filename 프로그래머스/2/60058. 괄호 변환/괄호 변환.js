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
    
    if(isCorrect(p)) { // 이미 올바른 괄호 문자열인 경우
        return p;
    } else {
        return;
    }
}