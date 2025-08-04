const solution = (prices) => {
    const [answer, stack, len] = [[], [], prices.length];
    
    for(let i = 0; i < len; i++) {
        while(stack.length && prices[i] < prices[stack.at(-1)]) {
            const idx = stack.pop();
            answer[idx] = i - idx;
        }
        
        stack.push(i);
    }
    
    while(stack.length) {
        const idx = stack.pop();
        answer[idx] = len - 1 - idx;
    }
    
    return answer;
}