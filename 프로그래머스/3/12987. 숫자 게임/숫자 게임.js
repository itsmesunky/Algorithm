const solution = (A, B) => {
    let score = 0;
    
    const sortedA = [...A].sort((a, b) => a - b);
    const sortedB = [...B].sort((a, b) => a - b);
    
    const len = A.length;
    
    let bIdx = 0;
    
    for(let aIdx = 0; aIdx < len; aIdx++) {
        const aNum = sortedA[aIdx];
        const bNum = sortedB[bIdx];
        
        while(bIdx < len && sortedB[bIdx] <= aNum) {
            bIdx++;
        }
        
        if(bIdx < len && sortedB[bIdx] > aNum) {
            score++;
            bIdx++;
        }
    }
    
    return score;
}