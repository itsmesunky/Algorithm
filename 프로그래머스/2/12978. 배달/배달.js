const solution = (N, road, K) => {
    const set = new Set();
    
    // 그래프 만들기
    const nodes = Array.from({length: N + 1}, () => []);
    for(const [a,b,c] of road) {
        nodes[a].push([b, c]);
        nodes[b].push([a, c]);
    }
    
    // 방문 여부 저장
    const visited = Array(N + 1).fill(false);
    visited[1] = true;
    
    const dfs = (node, times) => {
        for(let i = 0; i < nodes[node].length; i++) {
            const [child, time] = nodes[node][i];
            
            if(!visited[child] && times + time <= K) {
                visited[child] = true;
                set.add(child);
                dfs(child, times + time);
                // 백트래킹
                visited[child] = false;
            }
        }
    }
    
    dfs(1, 0);
    
    return set.size + 1;
}