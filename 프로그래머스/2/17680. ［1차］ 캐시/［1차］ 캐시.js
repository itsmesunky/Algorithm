const solution = (cacheSize, cities) => {
    let answer = 0;
    
    // cacheSize 길이의 cache 배열 생성
    const cache = Array(cacheSize).fill('');
    
    for(const city of cities) {
        const lowerCaseCity = city.toLowerCase();
        let idx = cache.indexOf(lowerCaseCity);
        const isMiss = idx === -1;
        
        // miss일 경우 +5
        // hit일 경우 -1
        answer += isMiss? 5 : 1;
        
        idx = isMiss ? cacheSize - 1 : idx;
        
        for(idx; idx > 0; idx--) {
            cache[idx] = cache[idx - 1];
        }
        
        cache[idx] = lowerCaseCity;
    }
    
    return answer;
}