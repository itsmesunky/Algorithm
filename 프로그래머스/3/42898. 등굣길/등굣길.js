function solution(m, n, puddles) {
    // 10억 7로 나눈 나머지 (문제 조건)
    const MOD = 1000000007;

    // 1. DP 테이블 초기화 (m은 가로, n은 세로이므로 배열 크기는 n+1, m+1)
    // grid[i]가 행(세로 좌표), grid[i][j]가 열(가로 좌표)을 나타내도록 설정
    const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

    // 2. 웅덩이 위치를 -1로 표시
    for (const [col, row] of puddles) {
        // 문제에서 (1, 1)부터 시작하므로 인덱스 그대로 사용
        dp[row][col] = -1; 
    }

    // 3. 출발 지점 초기화
    // (1, 1)까지 갈 수 있는 경로의 개수는 1개
    dp[1][1] = 1;

    // 4. DP 테이블 채우기 (i: 세로, j: 가로)
    for (let i = 1; i <= n; i++) { // 행 (세로) 순회
        for (let j = 1; j <= m; j++) { // 열 (가로) 순회
            
            // 현재 지점이 웅덩이라면 건너뜀
            if (dp[i][j] === -1) {
                dp[i][j] = 0; // 웅덩이는 경로 0개로 취급
                continue;
            }

            // (1, 1)은 이미 초기화했으므로 건너뜀
            if (i === 1 && j === 1) {
                continue;
            }

            // 위에서 오는 경로의 개수
            let fromUp = 0;
            if (i > 1 && dp[i - 1][j] !== -1) {
                fromUp = dp[i - 1][j];
            }

            // 왼쪽에서 오는 경로의 개수
            let fromLeft = 0;
            if (j > 1 && dp[i][j - 1] !== -1) {
                fromLeft = dp[i][j - 1];
            }

            // 현재 지점까지의 경로의 개수 = (위에서 오는 경로) + (왼쪽에서 오는 경로)
            dp[i][j] = (fromUp + fromLeft) % MOD;
        }
    }

    // 5. 도착 지점의 경로 개수 반환
    return dp[n][m];
}

// 예시 사용: 가로 4, 세로 3, 웅덩이 [(2, 2)]
// console.log(solution(4, 3, [[2, 2]])); // 결과: 4