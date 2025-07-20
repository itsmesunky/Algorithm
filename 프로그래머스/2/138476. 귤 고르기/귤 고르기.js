const solution = (k, tangerine) => {
    let answer = 0;
    const obj = {};
    
    for(const t of tangerine) {
        obj[t] = (obj[t] ?? 0) + 1;
    }
    
    const sorted = Object.values(obj).sort((a, b) => b - a);
    
    for(let i = 0; i < sorted.length; i++) {
        k -= sorted[i];
        answer++;
        
        if(k <= 0) break;
    }
    
    return answer;
}