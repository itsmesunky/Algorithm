/**
* getManhattanDist - 두 좌표 간 맨해튼 거리를 반환하는 함수
* @param {number} ax - A의 x 좌표
* @param {number} bx - B의 x 좌표
* @param {number} ay - A의 y 좌표
* @param {number} by - B의 y 좌표
* @returns {number} - 두 좌표 간 맨해튼 거리
*/
const getManhattanDist = (ax, bx, ay, by) => Math.abs(bx - ax) + Math.abs(by - ay);

const solution = (n, m, x, y, r, c, k) => {
    const manhattanDist = getManhattanDist(y, c, x, r);
    
    // 조기 종료
    // k에서 맨해튼 거리를 제외한 값이 짝수가 아니라면 불가(패리티 검사)
    if(k < manhattanDist || (k - manhattanDist) % 2 === 1) return "impossible";
    
    let answer = '';
    
    // 방향 정의
    // 애초에 방향 정의를 오름차순으로 작성
    const dirs = [
        ['d', 1, 0],
        ['l', 0, -1],
        ['r', 0, 1],
        ['u', -1, 0],
    ];
    
    // 현재 위치 행/열
    let currR = x, currC = y;
    
    for(let move = 1; move <= k; move++){
        for(const [command, dr, dc] of dirs) {
            const nr = currR + dr;
            const nc = currC + dc;
            
            if(nr < 1 || nc < 1 || nr > n || nc > m) continue;
            
            const remaining = k - move;
            const currManhattanDist = getManhattanDist(nc, c, nr, r);
            if(remaining < currManhattanDist) continue;
            if((remaining - currManhattanDist) % 2 !== 0) continue;
            
            currR = nr;
            currC = nc;
            answer += command;
            break;
        }
    }
    
    return answer;
}