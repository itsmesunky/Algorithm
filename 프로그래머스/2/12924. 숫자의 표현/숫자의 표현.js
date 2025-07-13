const solution = (n) => {
    let count = 0;
    
    for(let i = 1; i * (i - 1) / 2 < n; i++) {
        const num = (n - i * (i - 1) / 2) / i;
        
        if(!(num % 1)) count++;
    }
    
    return count;
}