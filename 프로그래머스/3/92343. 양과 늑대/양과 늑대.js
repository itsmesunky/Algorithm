const solution = (info, edges) => {
    const graph = Array.from({ length: info.length }, () => []);
    for (const [a, b] of edges) graph[a].push(b);

    let maxSheep = 0;

    const dfs = (sheep, wolf, node, nextNodes) => {
        // 방문할 노드가 양인지 늑대인지 처리
        if (info[node] === 0) sheep++;
        else wolf++;

        // 늑대가 양 이상이면 더 진행 불가
        if (wolf >= sheep) return;

        // 최대 양 갱신
        maxSheep = Math.max(maxSheep, sheep);

        // nextNodes 업데이트
        const newNextNodes = new Set(nextNodes);
        newNextNodes.delete(node);

        for (const child of graph[node]) {
            newNextNodes.add(child);
        }

        // 현재 갈 수 있는 모든 후보 노드 탐색
        for (const next of newNextNodes) {
            dfs(sheep, wolf, next, newNextNodes);
        }
    };

    dfs(0, 0, 0, new Set([0]));

    return maxSheep;
};
