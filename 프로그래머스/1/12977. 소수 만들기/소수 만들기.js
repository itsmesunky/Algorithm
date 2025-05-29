const isPrime = (num) => {
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(!(num % i)) {
            return false;
        }
    }
    
    return true;
}

const solution = (nums) => {
    let result = 0;
    
    for(let i = 0; i < nums.length - 2; i++) {
        for(let j = i + 1; j < nums.length - 1; j++) {
            for(let k = j + 1; k < nums.length; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                if(isPrime(sum)) result++;
            }
        }
    }
    
    return result;
}