const solution = (a, b) => {
    
    // a와 b의 최대공약수 찾기
    const GCD = (x, y) => {
        const max = Math.max(x, y);
        const min = Math.min(x, y);
        
        return max % min === 0 ? min : GCD(min, max % min);
    }
    
    const common = GCD(a, b);
    b /= common;
    
    while(b % 2 === 0) b /= 2;
    while(b % 5 === 0) b /= 5;
    
    return b === 1 ? 1 : 2;
}