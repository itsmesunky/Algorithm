const solution = (n) => {
    let result = 0;
    
    for(let i = 1; i <= Math.sqrt(n); i++) {
        if(n % i === 0) {
            result += i;
            
            const paired = n / i;
            
            if(paired !== i) {
                result += paired;
            }
        }
    }
    
    return result;
}