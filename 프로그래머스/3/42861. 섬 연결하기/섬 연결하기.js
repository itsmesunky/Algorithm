/**
* 문제 해결 시나리오
* 1. 최소 비용으로 모든 노드 연결 → Kruskal
* 2. 단, 사이클을 만들지 않아야 함 → Union-Find
*/
const solution = (n, costs) => {
    const parent = Array.from({length: n}, (_, idx) => idx);
    
    // 특정 노드의 부모 노드 찾기
    const getParent = (x) => {
        if(parent[x] === x) return x;
        return parent[x] = getParent(parent[x]);
    }
    
    // 부모 합침
    const unionParent = (x, y) => {
        const rootX = getParent(x);
        const rootY = getParent(y);
        
        // 둘 중 더 작은 값으로 업데이트
        if(rootX < rootY) {
            parent[rootY] = rootX;
        } else {
            parent[rootX] = rootY;
        }
    }
    
    // 사이클 형성 여부
    const isUnion = (x, y) => getParent(x) === getParent(y);
    
    // Kruskal 알고리즘을 활용을 위해 간선 비용 오름차순 정렬
    costs.sort((a, b) => a[2] - b[2]);
    
    let sum = 0;
    
    for(const [a, b, c] of costs) {
        if(!isUnion(a, b)) {
            unionParent(a, b); // 두 노드 연결
            sum += c; // 비용 누적
        }
    }
    
    return sum;
}