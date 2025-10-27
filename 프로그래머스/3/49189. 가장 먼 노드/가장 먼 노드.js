/**
* 문제 해결 시나리오
* - BFS 알고리즘 활용
*/
const solution = (n, vertex) => {
    // 1번 노드에서 각 노드까지의 최단 거리 저장 배열(1-based)
    const dist = Array(n + 1).fill(-1);
    dist[1] = 0;
    
    const graph = Array.from({length: n + 1}, () => []);
    vertex.forEach(([a, b]) => {
        graph[a].push(b);
        graph[b].push(a);
    });
    
    let head = 0;
    const queue = [1];
    
    while(head < queue.length) {
        const currNode = queue[head++];
        
        for(const node of graph[currNode]) {
            if(dist[node] === -1) {
                dist[node] = dist[currNode] + 1;
                queue.push(node);
            }
        }
    }
    
    const maxDist = Math.max(...dist);
    return dist.filter(d => d === maxDist).length;
}