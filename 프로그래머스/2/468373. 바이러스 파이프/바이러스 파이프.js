const solution = (n, infection, edges, k) => {
    let answer = Number.MIN_SAFE_INTEGER;
    
    const strPipeType = { 1: 'A', 2: 'B', 3: 'C' };
    
    const graph = Array.from({length: n + 1}, () => []);
    for(const [x, y, type] of edges) {
        graph[x].push([y, strPipeType[type]]);
        graph[y].push([x, strPipeType[type]]);
    }
    
    const visited = Array(n + 1).fill(false);
    visited[infection] = true;
    
    /**
    * @param {'A'|'B'|'C'} currOpened - 현재 탐색에서 열린 파이프의 종류
    * @param {number[]} currInfections - 현재까지 감염된 배양체
    * @param {number} currK - 현재까지 열고 닫은 횟수
    */
    const dfs = (currOpened, currInfections, currK, currVisited) => {
        if(k < currK) {
            answer = Math.max(currInfections.length, answer);
            return;
        }
        
        // 감염 배양체에 현재 열린 파이프로 연결된 노드들을 감염 배양체에 추가
        for(const currInfection of currInfections) {
            const neighbors = graph[currInfection];
            for(const [y, type] of neighbors) {
                if(type === currOpened && !currVisited[y]) {
                    currVisited[y] = true;
                    currInfections.push(y);
                }
            }
        }

        if(currOpened === 'A') {
            dfs('B', [...currInfections], currK + 1, [...currVisited]);
            dfs('C', [...currInfections], currK + 1, [...currVisited]);    
        } else if(currOpened === 'B') {
            dfs('A', [...currInfections], currK + 1, [...currVisited]);    
            dfs('C', [...currInfections], currK + 1, [...currVisited]);
        } else {
            dfs('A', [...currInfections], currK + 1, [...currVisited]);
            dfs('B', [...currInfections], currK + 1, [...currVisited]);
        }
        
    }
    
    dfs('A', [infection], 1, [...visited]);
    dfs('B', [infection], 1, [...visited]);
    dfs('C', [infection], 1, [...visited]);
    
    return answer;
}