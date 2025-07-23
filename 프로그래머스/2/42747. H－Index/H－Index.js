const solution = (citations) => {
    // 최대 인용 횟수
    const max = Math.max(...citations);
    
    for(let h = max; h >= 0; h--){
        // h번 이상 인용된 논문의 수
        const cnt = citations.filter(v => h <= v).length;
        
        // h번 이상 인용된 논문의 수가 h편 미만인 경우
        if(h > cnt) {
            continue;
        } else {
            return h;
        }
    }
}