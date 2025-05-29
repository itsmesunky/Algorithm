const solution = (nums) => {
    let result = 0;
    
    const isPrime = Array(3001).fill(true);
    isPrime[0] = isPrime[1] = false;
    
    for(let i = 2; i <= isPrime.length; i++) {
        if(isPrime[i]) {
            for(let j = i * 2; j <= isPrime.length; j += i) {
                isPrime[j] = false;
            }
        }
    }
    
    for(let i = 0; i < nums.length - 2; i++) {
        for(let j = i + 1; j < nums.length - 1; j++) {
            for(let k = j + 1; k < nums.length; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                if(isPrime[sum]) result++;
            }
        }
    }
    
    return result;
}