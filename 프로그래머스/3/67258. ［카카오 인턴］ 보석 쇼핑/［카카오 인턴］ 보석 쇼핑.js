const solution = (gems) => {
    let answer = [0, gems.length - 1];
    
    // 보석 종류 수
    const kinds = new Set(gems).size;
    
    // gems 배열 탐색하면서 찾은 보석별 개수
    const counter = new Map();
    
    let left = 0;
    for(let right = 0; right < gems.length; right++) {
        const rKey = gems[right];
        counter.set(rKey, (counter.get(rKey) || 0) + 1);
        
        // 모든 종류의 보석을 찾았을 때
        while(counter.size === kinds) {
            if(right - left < answer[1] - answer[0]) {
                answer = [left, right];
            }
            
            // 최소 범위 찾기
            const lKey = gems[left];
            counter.set(lKey, counter.get(lKey) - 1);
            if(!counter.get(lKey)) counter.delete(lKey);
            left++;
        }
    }
    
    return [answer[0] + 1, answer[1] + 1];
}