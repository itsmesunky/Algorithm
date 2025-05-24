const solution = (num) => {
    let result = num;
    let count = 0;
    
    if(num === 1) return 0;
    
    while(result !== 1) {
        if(count === 500) return -1;
        
        if(result % 2 === 0) {
            result /= 2;
        } else {
            result *= 3;
            result++;
        }
        count++;
    }
    
    return count;
}