function solution(board) {
    const R = board.length;
    const C = board[0].length;
    const visited = Array.from({ length: R }, () => Array(C).fill(false));
    const queue = [];

    // 시작 지점 'R'을 찾아 큐에 추가
    let startR, startC;
    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            if (board[i][j] === 'R') {
                startR = i;
                startC = j;
                break;
            }
        }
        if (startR !== undefined) break;
    }

    queue.push([startR, startC, 0]); // [행, 열, 이동 횟수]
    visited[startR][startC] = true;

    // 4방향 (상, 하, 좌, 우) 이동
    const dy = [-1, 1, 0, 0];
    const dx = [0, 0, -1, 1];

    while (queue.length > 0) {
        const [currR, currC, moves] = queue.shift();

        // 목표 지점 'G'에 도착했으면 이동 횟수 반환
        if (board[currR][currC] === 'G') {
            return moves;
        }

        // 4방향으로 미끄러져 멈추는 지점 탐색
        for (let i = 0; i < 4; i++) {
            let nextR = currR;
            let nextC = currC;

            // 벽('D')이나 경계에 닿을 때까지 이동
            while (
                nextR >= 0 && nextR < R &&
                nextC >= 0 && nextC < C &&
                board[nextR][nextC] !== 'D'
            ) {
                nextR += dy[i];
                nextC += dx[i];
            }

            // 멈춘 지점은 벽이나 경계 바로 앞이므로 한 칸 되돌리기
            nextR -= dy[i];
            nextC -= dx[i];

            // 미끄러지기 전 위치와 동일하거나 이미 방문한 위치는 스킵
            if ((nextR === currR && nextC === currC) || visited[nextR][nextC]) {
                continue;
            }

            // 새로운 위치를 방문 처리하고 큐에 추가
            visited[nextR][nextC] = true;
            queue.push([nextR, nextC, moves + 1]);
        }
    }

    // 목표 지점에 도달할 수 없는 경우
    return -1;
}