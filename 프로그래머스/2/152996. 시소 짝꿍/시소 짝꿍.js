const solution = (weights) => {
    let answer = 0;
    const map = new Map();
    
    // 몸무게별 사람 수
    for(const weight of weights) {
        map.set(weight, (map.get(weight) || 0) + 1);
    }
    
    for(const [weight, count] of map) {
        // 1:1 비율
        // 몸무게가 같은 사람 n명 중, 2명을 고르는 조합의 수(nC2)
        if(count >= 2) {
            answer += count * (count - 1) / 2;
        }
        
        // 시소 짝꿍이 가능한 조합
        const possiblePairs = [
            (weight * 1) / 2, // 1:2 비율
            (weight * 2) / 3, // 2:3 비율
            (weight * 3) / 4 // 3:4 비율
        ]
        
        
        for(const possiblePair of possiblePairs) {
            if(Number.isInteger(possiblePair) && map.has(possiblePair)) {
                answer += count * map.get(possiblePair);
            }
        }
    }
    
    return answer;
}