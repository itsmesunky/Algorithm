const solution = (tickets) => {
    const answer = ["ICN"];
    const totalTickets = tickets.length; // 총 티켓 개수 저장
    const map = new Map();
    
    tickets.forEach(([a, b]) => {
        map.set(a, (map.get(a) || []).concat([[b, false]]));
    });
    
    for(const [key, values] of map) {
        values.sort();
    }
    
    // 정답을 찾았는지 확인하는 플래그
    let found = false;

    // 2. 백트래킹을 포함한 DFS
    const dfs = (key) => {
        // 성공 조건: 모든 티켓을 다 사용했을 때 (경로 길이는 티켓 수 + 1)
        if (answer.length === totalTickets + 1) {
            found = true; // 정답을 찾았다고 표시
            return;
        }

        if (!map.has(key)) return;
        
        const values = map.get(key);
        
        for(let i = 0; i < values.length; i++) {
            const value = values[i][0];
            const visited = values[i][1];
            
            if(!visited) {
                // 1. 전진 (Go)
                values[i][1] = true; // 티켓 사용
                answer.push(value);
                
                dfs(value);
                
                // **중요: 정답을 찾았으면 더 이상의 탐색 없이 즉시 종료!**
                if (found) {
                    return;
                }
                
                // 2. 백트래킹 (Backtrack) - 정답을 찾지 못했으면 되돌리기
                values[i][1] = false; // 티켓 사용 취소
                answer.pop(); // 경로에서 제거
            }
        }
    }
    
    dfs("ICN");
    
    return answer;
}