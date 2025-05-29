const solution = (n) => {
    const nums = Array(n + 1).fill(0);
    let count = 0;
    
    for(let i = 2; i <= n; i++) {
        if(nums[i] === 0) {
            count++;
            
            for(let j = i; j <= n; j = j + i) {
                nums[j] = 1;
            }
        }
    }
    
    return count;
}