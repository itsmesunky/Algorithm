const solution = (n, s) => {
    const quotient = Math.floor(s / n);
    let remainder = s % n;
    
    if(!quotient) return [-1];
    
    const answer = Array(n).fill(quotient);
    let idx = 0;
    
    while(remainder) {
        answer[idx++ % n]++;
        remainder--;
    }
    
    return answer.sort((a, b) => a - b);
}