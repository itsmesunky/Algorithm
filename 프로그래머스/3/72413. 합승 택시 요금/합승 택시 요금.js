const solution = (n, s, a, b, fares) => {
    const floyd = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));
    
    for(let i = 1; i <= n; i++) {
        floyd[i][i] = 0;
    }
    
    for(const [start, end, cost] of fares) {
        floyd[start][end] = cost;
        floyd[end][start] = cost;
    }
    
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= n; j++) {
            for(let k = 1; k <= n; k++) {
                if(floyd[i][j] + floyd[i][k] < floyd[j][k]) {
                    floyd[j][k] = floyd[i][j] + floyd[i][k];
                }
            }
        }
    }
    
    let answer = Infinity;
    
    for(let i = 1; i <= n; i++) {
        answer = Math.min(answer, floyd[s][i] + floyd[a][i] + floyd[b][i]);
    }
    
    return answer;
}