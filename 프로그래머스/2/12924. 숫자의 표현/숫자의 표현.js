const solution = (n) => {
    let answer = 1;
    let num = Math.ceil(n / 2);
    let sum = 0;
    
    for(let i = 1; i < num; i++) {
        sum = 0;
        for(let j = i; j <= num; j++) {
            sum += j;
            
            if(sum > n) break;
            if(sum === n) {
                answer++;
                break;
            }
        }
    }
    
    return answer;
}