const solution = (number, k) => {
    const stack = [];
    
    for(const num of number) {
        while(stack.length && k > 0 && stack.at(-1) < num) {
            stack.pop();
            k--;
        }
        
        stack.push(num);
    }
    
    stack.splice(stack.length - k, k);
    
    return stack.join('');
}