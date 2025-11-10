const solution = (info, edges) => {
    const graph = Array.from({ length: info.length }, () => []);
    for(const [parent, child] of edges) {
        graph[parent].push(child);
    }
    
    let maxSheepCount = 0;
    
    const dfs = (sheep, wolf, node, nextNodes) => {
        if(info[node] === 0) sheep++;
        else wolf++;
        
        maxSheepCount = Math.max(maxSheepCount, sheep);
        
        if(sheep === wolf) return;
        
        const newNodes = new Set(nextNodes);
        newNodes.delete(node);
        
        for(const child of graph[node]) {
            newNodes.add(child);
        }
        
        // 현재 노드에서 이동 가능한 후보 노드들에 대해 DFS
        for(const candidate of newNodes) {
            dfs(sheep, wolf, candidate, newNodes);
        }
    }
    
    dfs(0, 0, 0, new Set([0]));
    
    return maxSheepCount;
}