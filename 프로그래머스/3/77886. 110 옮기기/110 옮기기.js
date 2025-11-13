const solution = (s) => {
    return s.map((str) => {
        // 조기 종료 조건
        if(str.length < 4) return str;
        if(str.indexOf('110') === -1) return str;
        
        const stack = [];
        let count = 0;
        for(const char of str) {
            if(stack.length >= 2) {
                if(char === '0' && stack.at(-1) === '1' && stack.at(-2) === '1') {
                    count++;
                    for(let i = 0; i < 2; i++) stack.pop();
                } else {
                    stack.push(char);
                }
            } else {
                stack.push(char);
            }
        }
        
        let result = stack.join('');
        const composite = '110'.repeat(count);
        const lastZeroIndex = result.lastIndexOf('0');

        if(lastZeroIndex === -1) { // 문자열 내에 0이 없는 경우
            result = composite + result;
        } else {
            const prev = result.slice(0, lastZeroIndex + 1);
            const after = result.slice(lastZeroIndex + 1);
            result = prev + '110'.repeat(count) + after;
        }

        return result;
    });
}