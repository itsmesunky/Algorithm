function solution(board) {
    const N = board.length;
    
    // 로봇의 두 좌표를 일관된 문자열로 변환 (방문 처리를 위함)
    const posToString = ([[r1, c1], [r2, c2]]) => {
        if (r1 > r2 || (r1 === r2 && c1 > c2)) {
            return `${r2},${c2},${r1},${c1}`;
        }
        return `${r1},${c1},${r2},${c2}`;
    };

    // 현재 상태에서 이동/회전 가능한 모든 다음 좌표를 반환하는 함수
    const getNextPositions = (pos, board) => {
        const nextPos = [];
        const [[r1, c1], [r2, c2]] = pos;
        
        // 1. 상하좌우 이동
        const dr = [-1, 1, 0, 0];
        const dc = [0, 0, -1, 1];
        
        for (let i = 0; i < 4; i++) {
            const nr1 = r1 + dr[i];
            const nc1 = c1 + dc[i];
            const nr2 = r2 + dr[i];
            const nc2 = c2 + dc[i];
            
            // 맵을 벗어나지 않고, 두 칸 모두 벽(1)이 아닌 경우
            if (nr1 >= 0 && nr1 < N && nc1 >= 0 && nc1 < N && 
                nr2 >= 0 && nr2 < N && nc2 >= 0 && nc2 < N) {
                if (board[nr1][nc1] === 0 && board[nr2][nc2] === 0) {
                    nextPos.push([[nr1, nc1], [nr2, nc2]]);
                }
            }
        }
        
        // 2. 회전
        const isHorizontal = r1 === r2; // 가로 방향인지 확인
        
        if (isHorizontal) {
            // 가로 상태 -> 세로 상태로 회전 (위, 아래로 회전)
            const dirs = [-1, 1]; // -1: 위로 회전, 1: 아래로 회전
            for (const d of dirs) {
                // 회전하려는 2x2 영역이 맵 안이고 모두 빈칸(0)이어야 함
                if (r1 + d >= 0 && r1 + d < N && board[r1 + d][c1] === 0 && board[r2 + d][c2] === 0) {
                    nextPos.push([[r1, c1], [r1 + d, c1]]); // 왼쪽 축 기준 회전
                    nextPos.push([[r2, c2], [r2 + d, c2]]); // 오른쪽 축 기준 회전
                }
            }
        } else {
            // 세로 상태 -> 가로 상태로 회전 (왼쪽, 오른쪽으로 회전)
            const dirs = [-1, 1]; // -1: 왼쪽으로 회전, 1: 오른쪽으로 회전
            for (const d of dirs) {
                // 회전하려는 2x2 영역이 맵 안이고 모두 빈칸(0)이어야 함
                if (c1 + d >= 0 && c1 + d < N && board[r1][c1 + d] === 0 && board[r2][c2 + d] === 0) {
                    nextPos.push([[r1, c1], [r1, c1 + d]]); // 위쪽 축 기준 회전
                    nextPos.push([[r2, c2], [r2, c2 + d]]); // 아래쪽 축 기준 회전
                }
            }
        }
        
        return nextPos;
    };

    // BFS 초기 설정
    const startPos = [[0, 0], [0, 1]];
    const q = [[startPos, 0]]; // [좌표 배열, 걸린 시간]
    const visited = new Set();
    visited.add(posToString(startPos));
    
    let head = 0; // 큐의 첫 번째 요소를 가리키는 포인터 (shift 대신 사용)

    while (head < q.length) {
        const [pos, time] = q[head++];
        const [[r1, c1], [r2, c2]] = pos;
        
        // 목적지 (N-1, N-1)에 도달한 경우 (두 칸 중 하나라도 닿으면 됨)
        if ((r1 === N - 1 && c1 === N - 1) || (r2 === N - 1 && c2 === N - 1)) {
            return time;
        }
        
        // 갈 수 있는 다음 좌표 탐색
        const nextPositions = getNextPositions(pos, board);
        
        for (const nPos of nextPositions) {
            const nPosStr = posToString(nPos);
            // 아직 방문하지 않은 상태라면 큐에 추가
            if (!visited.has(nPosStr)) {
                visited.add(nPosStr);
                q.push([nPos, time + 1]);
            }
        }
    }
    
    return 0;
}