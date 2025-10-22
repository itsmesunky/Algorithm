const solution = (n, stations, w) => {
    let answer = 0;
    
    // 각 기지국이 전파 가능한 최대 아파트 개수
    const maxCoverCount = (2 * w) + 1;
    
    // 전파가 마지막으로 도달한 곳
    let lastPos = 1;
    
    for(const num of stations) {
        // 현재 기지국에서 전파되고 있는 아파트 중 최솟값
        const minValue = Math.max(num - w, 0);
        // 현재 기지국에서 전파하고 있는 아파트 중 최댓값
        const maxValue = Math.min(num + w, n);
        
        if(lastPos < minValue) {
            answer += Math.ceil((minValue - lastPos) / maxCoverCount);
        }
        
        lastPos = maxValue + 1;
    }
    
    if(lastPos <= n) {
        answer += Math.ceil((n - lastPos) / maxCoverCount) || 1;
    }
    
    return answer;
}