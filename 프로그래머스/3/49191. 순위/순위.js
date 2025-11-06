/**
* 문제 해결 시나리오
* - 플로이드 워셜 알고리즘을 사용
*/
const solution = (n, results) => {
    const floyd = Array.from({ length: n + 1 }, () => Array(n + 1).fill(false)) // 1-based
    
    for(const [winner, loser] of results) {
        floyd[winner][loser] = true;
    }
    
    // 플로이드 워셜
    // i 선수가 k 선수를 거쳐 j 선수를 이길 수 있다면 갱신
    for(let k = 1; k <= n; k++) {
        for(let i = 1; i <= n; i++) {
            for(let j = 1; j <= n; j++) {
                if(!floyd[i][j] && floyd[i][k] && floyd[k][j]) {
                    floyd[i][j] = true;
                }
            }
        }
    }
    
    let answer = 0;
    for(let i = 1; i <= n; i++) {
        let sum = 0;
        for(let j = 1; j <= n; j++) {
            sum += floyd[i][j] + floyd[j][i];
        }
        
        if(sum === n - 1) answer++;
    }
    
    return answer;
}