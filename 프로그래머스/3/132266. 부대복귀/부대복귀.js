/*
* 문제 해결 시나리오
* 1. 간선의 길이가 동일하므로 BFS로 최단 거리 구함
*/
const solution = (n, roads, sources, destination) => {
    // BFS를 위한 인접 노드 리스트 생성
    const graph = Array.from({length: n + 1}, () => []);
    for(const [a, b] of roads) {
        // 양방향 연결
        graph[a].push(b);
        graph[b].push(a);
    }
    
    // destination에서 source[i] 까지의 거리 저장
    const dist = Array(n + 1).fill(-1);

    // 자기 자신과의 거리는 0으로 초기화
    dist[destination] = 0;

    let head = 0;
    const queue = [destination];
    while(head < queue.length) {
        const node = queue[head++];
        for(const next of graph[node]) {
            if(dist[next] === -1) {
                dist[next] = dist[node] + 1;
                queue.push(next);
            }
        }
    }
    
    return sources.map(source => dist[source]);
}