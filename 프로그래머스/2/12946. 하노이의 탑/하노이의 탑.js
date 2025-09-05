const solution = (n) => {
    const answer = [];
    
    const hanoi = (num, from, to, via) => {
        if(num === 0) return;
        
        // 맨 아래 원반을 제외한 모든 원반을 보조 기둥으로 이동
        hanoi(num - 1, from, via, to);
        
        // 맨 아래 원반을 도착 기둥으로 이동
        answer.push([from, to]);
        
        // 보조 기둥에 있던 원반들을 도착 기둥으로 이동
        hanoi(num - 1, via, to, from);
    }
    
    hanoi(n, 1, 3, 2);
    
    return answer;
}