const solution = (k, tangerine) => {
    let answer = 0;
    
    const arr = [];
    
    for(const t of tangerine) {
        arr[t] = (arr[t] ?? 0) + 1;
    }
    
    arr.sort((a, b) => b - a);
    
    for(let i = 0; i < arr.length; i++) {
        if(k <= 0) break;
        
        k -= arr[i];
        answer++;
    }
    
    return answer;
}