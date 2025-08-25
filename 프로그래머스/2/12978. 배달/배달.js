/**
* dijkstra 알고리즘 사용
* : 특정 노드로부터 모든 노드까지의 최단 거리를 구하기 위해
*/
const solution = (N, road, K) => {
    // 노드 방문 여부 저장 배열
    const visited = Array(N + 1).fill(false);
    
    // 1번 마을부터 각 마을까지의 최단 거리 저장 배열
    const dist = Array(N + 1).fill(Infinity);
    
    // 각 노드에 이웃한 노드까지의 초기 거리
    const graph = Array.from({length: N + 1}, () => Array(N + 1).fill(Infinity));
    for(const [a, b, c] of road) {
        if(c < graph[a][b]) {
            graph[a][b] = c;
            graph[b][a] = c;            
        }
    }
    
    // 자기 자신과의 거리는 0으로 초기화
    for(let i = 1; i <= N; i++) {
        graph[i][i] = 0;
    }
    
    dist[1] = 0;
    
    for(let i = 1; i <= N; i++) {
        let min_dist = Infinity;
        let min_node = -1;
        
        // 방문하지 않은 노드 중, 최단 거리 노드 찾기
        for(let j = 1; j <= N; j++) {
            if(!visited[j] && dist[j] < min_dist) {
                min_dist = dist[j];
                min_node = j;
            }
        }
        
        if(min_node === -1) break;
        
        // min_node 방문 처리
        visited[min_node] = true;
        
        // min_node와 인접한 노드 중, 방문하지 않은 노드에 대해 거리 갱신
        for(let j = 1; j <= N; j++) {
            if(!visited[j] && graph[min_node][j] !== Infinity) { // Infinity인 경우 인접하지 않은 노드
                const newDist = dist[min_node] + graph[min_node][j];
                if(newDist < dist[j]) {
                    dist[j] = newDist;
                }
            }
        }
    }
    
    return dist.filter(v => v <= K).length;
};