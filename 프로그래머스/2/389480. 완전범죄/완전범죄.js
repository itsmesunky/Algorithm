/**
* 문제 해결 시나리오
* 1. info 배열을 순회하며 각 물건에 대해, A가 훔치는 경우와 B가 훔치는 경우에 대해 가능한 조합인지를 매번 갱신
* 2. 모든 물건을 훔쳤을 때, A 도둑과 B 도둑 모두 걸리지 않았을 때 A 도둑의 최소 흔적 횟수를 반환
*/
const solution = (info, n, m) => {
    let dp = Array.from({length: n}, () => Array(m).fill(false));
    dp[0][0] = true;
    
    for(const [addA, addB] of info) {
        const next = Array.from({length: n}, () => Array(m).fill(false));
        
        for(let a = 0; a < n; a++) {
            for(let b = 0; b < m; b++) {
                if(!dp[a][b]) continue;
                
                // A가 현재 물건을 훔치는 경우
                const na = a + addA;
                if(na < n) next[na][b] = true;
                
                // B가 현재 물건을 훔치는 경우
                const nb = b + addB;
                if(nb < m) next[a][nb] = true;
            }
        }
        
        dp = next;
    }
    
    let answer = Infinity;
    
    for(let a = 0; a < n; a++) {
        for(let b = 0; b < m; b++) {
            if(dp[a][b]) {
                answer = Math.min(answer, a);
            }
        }
    }
    
    return answer === Infinity ? -1 : answer;
}