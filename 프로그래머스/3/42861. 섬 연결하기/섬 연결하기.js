/**
* 문제 해결 시나리오
* 1. 최소 비용으로 모든 노드를 연결
* 2. Kruskal + Union-Find 알고리즘 활용
*/
const solution = (n, costs) => {
    // 각 노드의 부모 노드를 저장하기 위한 배열
    const parent = Array.from({length: n}, (_, idx) => idx);
    
    // 부모 노드 찾기 - recursive
    const getParent = (node) => {
        const result = parent[node];
        if(result === node) return result;
        return parent[node] = getParent(result);
    }
    
    // 부모의 값이 더 작은 쪽으로 부모 합침
    const unionParent = (node1, node2) => {
        const rootA = getParent(node1);
        const rootB = getParent(node2);
        
        if (rootA < rootB) {
            parent[rootB] = rootA;
        } else {
            parent[rootA] = rootB;
        }
    }
    
    // 같은 부모, 즉 사이클을 그리는지 확인
    const isCycle = (a, b) => getParent(a) === getParent(b);
    
    // 간선 비용 오름차순 정렬
    costs.sort((a, b) => a[2] - b[2]);
    
    let answer = 0;
    for(const [a, b, c] of costs) {
        // 연결된 그래프인지 확인
        if(isCycle(a, b)) continue;
        // 연결 및 부모 합침
        unionParent(a, b);
        // 비용 누적
        answer += c;
    }
    
    return answer;
}