/**
* 문제 해결 아이디어
* 1. 특정 구간에 동일값 동일연산을 빠르게 처리 하기 위해 imos 알고리즘 사용
* 2. imos[board.length][board[0].length + 1]의 imos 배열 생성 및 0으로 초기화 
* 3. skill을 순회하며 imos 배열에 imos 알고리즘으로 값을 갱신
* 4. imos 배열 정리(board[r][j]에 더할 값) 후 imos 배열 순회하며 board[i][j] 갱신
* 5. 갱신된 board[i][j] 값이 1 이상이면 파괴되지 않은 건물이므로 answer 증가
* 6. answer 반환
*/
const solution = (board, skill) => {
    let answer = 0;
    
    const R = board.length;
    const C = board[0].length;
    
    // imos 배열 생성 및 0으로 초기화 
    const imos = Array.from({ length: R + 1 }, () => Array(C + 1).fill(0));
    
    for(const [type, r1, c1, r2, c2, degree] of skill) {
        const effect = (type === 1 ? -degree : degree);

        imos[r1][c1] += effect;
        imos[r1][c2 + 1] -= effect;
        imos[r2 + 1][c1] -= effect;
        imos[r2 + 1][c2 + 1] += effect;
    }
    
    for(let r = 0; r < R + 1; r++) {
        for(let c = 1; c < C + 1; c++) {
            imos[r][c] += imos[r][c - 1];
        }
    }
    
    for(let c = 0; c < C + 1; c++) {
        for(let r = 1; r < R + 1; r++) {
            imos[r][c] += imos[r - 1][c];
        }
    }
    
    for(let row = 0; row < R; row++) {
        for(let col = 0; col < C; col++) {
            board[row][col] += imos[row][col];
            // 1 이상이면 파괴되지 않은 건물
            if(board[row][col] > 0) answer++;
        }
    }
    
    return answer;
}