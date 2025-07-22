// 올바른 괄호인지 확인
const isCorrect = (s) => {
    const stack = [];
    
    [...s].forEach(v => {
        switch(v) {
            case '[': case '{': case '(':
                stack.push(v);
                break;
            default:
                const last = stack.at(-1);
                
                if((v === ']' && last === '[')
                   || (v === '}' && last === '{')
                   || (v === ')' && last === '(')) {
                    stack.pop();
                } else {
                    stack.push(v);
                }
        }
    })
    
    return stack.length ? false : true;
}

const solution = (s) => {
    let answer = 0;
    let str = [...s];
    
    for(let i = 0; i < s.length; i++) {
        // 올바른 괄호이면 answer 증가
        if(isCorrect(str.join(''))) {
            answer++;
        }
        
        str.push(str.shift());
    }
    
    return answer;
}