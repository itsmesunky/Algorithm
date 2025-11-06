const solution = (scores) => {
    const [wanhoA, wanhoB] = scores[0];
    const wanhoAB = wanhoA + wanhoB;
    
    // 정렬 최적화: scores A 내림차순, B 오름차순 정렬
    scores.sort((a, b) => b[0] - a[0] || a[1] - b[1]);
    
    let maxB = 0;
    let rank = 1;
    
    for(const [a, b] of scores) {
        maxB = Math.max(maxB, b);
        
        if(b < maxB) { // 인센티브를 받지 못하는 경우
            if(a === wanhoA && b === wanhoB) return -1;
            continue;
        }
        
        if(a + b > wanhoAB) rank++;
    }
    
    return rank;
}