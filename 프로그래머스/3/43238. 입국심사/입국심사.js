const solution = (n, times) => {
    let answer = 0;
    
    let min = 1, max = Number.MAX_SAFE_INTEGER;
    
    while(min <= max) {
        let sum = 0;
        let mid = Math.floor((max + min) / 2);
        
        for(const time of times) {
            sum += Math.floor(mid / time);
        }
        
        if(sum >= n) {
            answer = mid;
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    }
    
    return answer;
}