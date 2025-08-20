const solution = (n, wires) => {
    let answer = Number.MAX_SAFE_INTEGER;
    
    // 각 노드에 인접한 노드 저장
    const nodes = Array.from({length: n + 1}, () => []);
    for(const [v1, v2] of wires) {
        nodes[v1].push(v2);
        nodes[v2].push(v1);
    }
    
    // 각 노드 방문 여부
    const visited = Array(n + 1).fill(false);
    
    // 각 전선을 돌면서 n - v2에 인접한 노드 계산
    for(const [v1, v2] of wires) {
        let count = 1;
        visited[v2] = true;
        
        const dfs = (node) => {
            for(let i = 0; i < nodes[node].length; i++) {
                const currentNode = nodes[node][i];
                
                if(!visited[currentNode] && currentNode !== v1){
                    visited[currentNode] = true;
                    count++;
                    dfs(currentNode);
                }
            }
        }    
        
        dfs(v2);
        
        answer = Math.min(answer, Math.abs((n - count) - (count)));
        
        // 백트래킹
        visited.fill(false);
    }
    
    return answer;
}