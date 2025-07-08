const solution = (s) => {
    const stack = [];
    
    for(const char of s) {
        if(char === '(') {
            stack.push(char);
        } else {
            if(!stack.length) {
                return false;
            } else {
                stack.pop();
            }
        }
    }
    
    return stack.length ? false : true;
}