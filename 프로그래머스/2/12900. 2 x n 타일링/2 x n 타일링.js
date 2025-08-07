const solution = (n) => {
    if(n === 1 || n === 2) {
        return n;
    }
    
    let a = 1, b = 2;
    
    let answer;
        
    for(let i = 3; i <= n; i++) {
        answer = (a + b) % 1000000007;
        a = b;
        b = answer;
    }
    
    return answer;
}