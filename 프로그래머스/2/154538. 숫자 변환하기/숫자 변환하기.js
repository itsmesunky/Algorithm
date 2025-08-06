const solution = (x, y, n) => {
    // x와 y가 같으면 연산이 필요 없으므로 0을 반환합니다.
    if (x === y) return 0;
    
    // dist 배열은 각 숫자에 도달하기 위한 최소 연산 횟수를 저장합니다.
    // -1로 초기화하여 방문하지 않았음을 표시합니다.
    const dist = Array(1000001).fill(-1);
    
    // BFS 탐색을 위한 큐를 생성합니다.
    const queue = [x];
    
    // 시작점 x의 거리는 0으로 설정합니다.
    dist[x] = 0;
    
    let head = 0; // 큐의 인덱스를 관리하여 shift() 대신 사용 (성능 최적화)
    
    while (queue.length > head) {
        const current = queue[head++];
        
        // y에 도달했으면, 그 값을 반환합니다.
        if (current === y) {
            return dist[y];
        }

        // 가능한 세 가지 연산을 모두 시도합니다.
        const nexts = [current + n, current * 2, current * 3];
        
        for (const next of nexts) {
            // next가 y를 넘지 않고, 아직 방문하지 않았다면
            if (next <= y && dist[next] === -1) {
                // 다음 숫자의 거리를 현재 거리 + 1로 설정합니다.
                dist[next] = dist[current] + 1;
                // 큐에 추가하여 다음 탐색 대상으로 만듭니다.
                queue.push(next);
            }
        }
    }
    
    // 큐가 비었는데도 y에 도달하지 못했다면 -1을 반환합니다.
    return dist[y];
};