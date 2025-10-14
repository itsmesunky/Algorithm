function solution(grid) {
    const R = grid.length;
    const C = grid[0].length;
    // [row][col][direction]: 해당 방향으로 해당 칸을 방문했는지 여부
    const visited = Array.from({ length: R }, () => 
        Array.from({ length: C }, () => Array(4).fill(false))
    );
    const dr = [-1, 0, 1, 0]; // 상, 우, 하, 좌
    const dc = [0, 1, 0, -1];
    const answer = [];

    // 모든 칸과 모든 방향에 대해 탐색 시작
    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            for (let d = 0; d < 4; d++) {
                if (!visited[r][c][d]) {
                    // 방문하지 않은 새로운 경로가 있다면 사이클 탐색 시작
                    const cycleLength = getCycleLength(r, c, d, R, C, grid, dr, dc, visited);
                    answer.push(cycleLength);
                }
            }
        }
    }
    return answer.sort((a, b) => a - b);
}

// 하나의 사이클 길이를 계산하는 함수 (getCycleLength)
function getCycleLength(r, c, d, R, C, grid, dr, dc, visited) {
    let count = 0;
    let currR = r;
    let currC = c;
    let currD = d;

    while (!visited[currR][currC][currD]) {
        // 1. 현재 (위치, 방향) 방문 처리
        visited[currR][currC][currD] = true;
        count++;

        // 2. 방향 전환 (L, R, S)
        const cell = grid[currR][currC];
        if (cell === 'L') {
            currD = (currD + 3) % 4; // 좌회전
        } else if (cell === 'R') {
            currD = (currD + 1) % 4; // 우회전
        }
        // 'S'는 직진이므로 currD 유지

        // 3. 다음 칸으로 이동 (경계 처리 포함)
        currR = (currR + dr[currD] + R) % R;
        currC = (currC + dc[currD] + C) % C;
    }

    return count;
}