/**
* 문제 해결 시나리오
* 1. 어느 정점에서 찢어져서 타야 최소 비용으로 갈 수 있는지 계산하면 됨
* 2. 위의 식을 계산하기 위해 모든 노드에서 모든 노드까지의 최소 비용을 구하는 플로이드-워셜 알고리즘 호라용
*/
const solution = (n, s, a, b, fares) => {
    const floyd = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));
    floyd.forEach((arr, i) => arr[i] = 0);
    
    for(const [s, e, value] of fares) {
        floyd[s][e] = value;
        floyd[e][s] = value;
    }
    
    for(let k = 1; k <= n; k++) {
        for(let i = 1; i <= n; i++) {
            for(let j = 1; j <= n; j++) {
                if(floyd[i][k] + floyd[k][j] < floyd[i][j]) {
                    floyd[i][j] = floyd[i][k] + floyd[k][j];
                }
            }
        }
    }
    
    let answer = Number.MAX_SAFE_INTEGER;
    
    for(let i = 1; i <= n; i++) {
        answer = Math.min(answer, floyd[s][i] + floyd[a][i] + floyd[b][i]);
    }
    
    return answer;
}