/**
* getManhattanDist - 두 지점 간 맨해튼거리(수평/수직)를 반환하는 함수
* @param {number} x - 좌표1의 행
* @param {number} y - 좌표2의 행
* @param {number} r - 좌표1의 열
* @param {number} c - 좌표2의 열
*/
const getManhattanDist = (x, y, r, c) => {
    return Math.abs(x - r) + Math.abs(y - c);
}

const solution = (n, m, x, y, r, c, k) => {
    const manhattanDist = getManhattanDist(x, y, r, c);
    
    // 조기 종료
    // 1) 두 지점간 맨해튼 거리가 k 초과인 경우 도달할 수 없다.
    // 2) k에서 맨해튼 거리를 뺀 값이 홀수인 경우 도달할 수 없다.
    if(k < manhattanDist || (k - manhattanDist) % 2) return "impossible";
    
    const dirs = [
        ['d', 1, 0],
        ['l', 0, -1],
        ['r', 0, 1],
        ['u', -1, 0]
    ];
    
let answer = '';
    let cx = x; // 현재 x 좌표 (행)
    let cy = y; // 현재 y 좌표 (열)
    
    // BFS 대신 1부터 k까지 한 걸음씩 걷는 Greedy 방식 적용
    for(let step = 1; step <= k; step++) {
        for(let i = 0; i < 4; i++) {
            const nx = cx + dirs[i][1];
            const ny = cy + dirs[i][2];
            
            // 격자 범위 밖이면 패스
            if(nx === 0 || ny === 0 || n < nx || m < ny) continue;
            
            const remainingSteps = k - step; // 앞으로 남은 이동 횟수
            const distToTarget = getManhattanDist(nx, ny, r, c); // 다음 칸에서 목표까지 거리
            
            // 가지치기 1: 남은 횟수로 목표지점까지 갈 수 없는 경우
            if(remainingSteps < distToTarget) continue;
            // 가지치기 2: 남은 횟수와 거리의 차이가 홀수면 정확히 도착할 수 없음 (패리티 검사)
            if((remainingSteps - distToTarget) % 2 !== 0) continue;
            
            // 조건을 만족하는 가장 빠른 사전순 방향을 찾았으므로 이동 확정
            cx = nx;
            cy = ny;
            answer += dirs[i][0];
            break; // 현재 step을 확정했으므로 다음 step으로 넘어감
        }
    }
    
    return answer;
}