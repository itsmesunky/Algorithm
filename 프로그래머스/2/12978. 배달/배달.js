const solution = (N, road, K) => {
    // 1. 그래프 구성 및 거리 배열 초기화
    const graph = Array.from({ length: N + 1 }, () => []);
    const dist = Array(N + 1).fill(Infinity);
    const pq = []; // 우선순위 큐 (배열로 간단히 구현)

    for (const [a, b, c] of road) {
        graph[a].push([b, c]);
        graph[b].push([a, c]);
    }

    // 2. 시작 노드 설정
    dist[1] = 0;
    pq.push([0, 1]); // [거리, 노드]

    // 3. 다익스트라 탐색
    while (pq.length > 0) {
        // 우선순위 큐에서 가장 거리가 짧은 노드 추출 (정렬로 흉내)
        pq.sort((a, b) => a[0] - b[0]);
        const [d, current] = pq.shift();

        // 이미 처리된 노드이거나, 더 긴 거리라면 스킵
        if (dist[current] < d) continue;

        // 현재 노드와 연결된 이웃 노드 탐색
        for (const [next, weight] of graph[current]) {
            const newDist = d + weight;

            // 더 짧은 경로를 찾았을 경우, 거리 갱신 및 큐에 추가
            if (newDist < dist[next]) {
                dist[next] = newDist;
                pq.push([newDist, next]);
            }
        }
    }

    // 4. K 시간 내에 배달 가능한 마을 개수 카운트
    let answer = 0;
    for (let i = 1; i <= N; i++) {
        if (dist[i] <= K) {
            answer++;
        }
    }

    return answer;
};