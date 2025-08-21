const solution = (players, m, k) => {
    let answer = 0;
    
    // 현재 증설된 서버들의 운영 시간 저장
    const servers = [];
    
    for(const player of players) {
        // 매 시간마다 모든 서버의 시간 차감
        servers.forEach((_, i) => servers[i] -= 1);
        
        // 현재 가동중인 서버
        const running = servers.filter(v => v > 0).length;
        
        // 필요한 서버의 개수
        const needs = Math.floor(player / m) - running;
        
        // 필요한 만큼 서버 증설
        for(let i = 0; i < needs; i++) {
            servers.push(k);
            answer++;
        }
    }
    
    return answer;
}