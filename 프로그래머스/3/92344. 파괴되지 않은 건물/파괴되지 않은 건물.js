/**
* 문제 해결 아이디어
* 1. 특정 구간 내 같은 값 같은 연산 처리를 위해 imos 알고리즘 적용
* 2. board를 기준으로 imos 배열 생성(row + 1, col + 1)
* 3. skill 순회하면서 imos 각 원소를 imos 알고리즘 계산 값으로 갱신
* 4. imos 배열 정리
* 5. board의 각 원소를 imos의 각 원소값으로 더하여 1 이상인 경우 answer 증가
*/
const solution = (board, skill) => {
    let answer = 0;
    
    const R = board.length;
    const C = board[0].length;
    
    const imos = Array.from({ length: R + 1 }, () => Array(C + 1).fill(0));
    
    for(const [type, r1, c1, r2, c2, degree] of skill) {
        const effect = type === 1 ? -degree : degree;
        
        imos[r1][c1] += effect; // 시작구간
        imos[r1][c2 + 1] -= effect; // 종료구간 1
        imos[r2 + 1][c1] -= effect; // 종료구간 2
        imos[r2 + 1][c2 + 1] += effect; // 🔥보정 처리 구간
    }
    
    // imos 정리 1. 가로 방향
    for(let row = 0; row < R; row++) {
        for(let col = 1; col < C; col++) {
            imos[row][col] += imos[row][col - 1];
        }
    }
    
    // imos 정리 2. 세로 방향
    for(let col = 0; col < C; col++) {
        for(let row = 1; row < R; row++) {
            imos[row][col] += imos[row - 1][col];
        }
    }
    
    // board 순회하며 누적합으로 갱신
    for(let row = 0; row < R; row++){
        for(let col = 0; col < C; col++) {
            board[row][col] += imos[row][col];
            if(0 < board[row][col]) answer++;
        }
    }
    
    return answer;
}