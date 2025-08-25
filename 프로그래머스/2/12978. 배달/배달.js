const solution = (N, road, K) => {
    // 1. 그래프 구성 및 거리 배열 초기화
    const graph = Array.from({ length: N + 1 }, () => Array(N + 1).fill(Infinity));
    const dist = Array(N + 1).fill(Infinity);
    const visited = Array(N + 1).fill(false);

    for (let i = 1; i <= N; i++) {
        graph[i][i] = 0; // 자기 자신으로의 거리는 0
    }

    for (const [a, b, c] of road) {
        if (c < graph[a][b]) {
            graph[a][b] = c;
            graph[b][a] = c;
        }
    }

    // 2. 시작 노드 설정
    dist[1] = 0;

    // 3. 다익스트라 탐색
    for (let i = 1; i <= N; i++) {
        // 방문하지 않은 노드 중 가장 거리가 짧은 노드 찾기 (선형 탐색)
        let min_dist = Infinity;
        let min_node = -1;

        for (let j = 1; j <= N; j++) {
            if (!visited[j] && dist[j] < min_dist) {
                min_dist = dist[j];
                min_node = j;
            }
        }

        // 더 이상 연결된 노드가 없으면 종료
        if (min_node === -1) break;

        // 가장 거리가 짧은 노드 방문 처리
        visited[min_node] = true;

        // 현재 노드와 연결된 모든 이웃 노드의 거리 갱신
        for (let j = 1; j <= N; j++) {
            if (!visited[j] && graph[min_node][j] !== Infinity) {
                const newDist = dist[min_node] + graph[min_node][j];
                if (newDist < dist[j]) {
                    dist[j] = newDist;
                }
            }
        }
    }

    // 4. K 시간 내에 배달 가능한 마을 개수 카운트
    let count = 0;
    for (let i = 1; i <= N; i++) {
        if (dist[i] <= K) {
            count++;
        }
    }

    return count;
};