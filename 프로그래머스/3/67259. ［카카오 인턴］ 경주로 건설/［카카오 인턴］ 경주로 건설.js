const solution = (board) => {
    let answer = Number.MAX_SAFE_INTEGER;
    
    const bfs = () => {
        // 시계 방향(우하좌상)으로 정의
        const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
        
        const R = board.length;
        const C = board[0].length;
        const minCost = Array.from({length: R}, () => 
                                   Array.from({length: C}, () =>
                                             Array(4).fill(Infinity)));
        
        // [현재행, 현재열, 현재 방향, 누적 금액]
        const queue = [];
        
        for (let i = 0; i < 2; i++) {
            const nr = dirs[i][0];
            const nc = dirs[i][1];
            
            if (nr < R && nc < C && !board[nr][nc]) {
                queue.push([nr, nc, i, 100]);
                minCost[nr][nc][i] = 100;
            }
        }
        
        let head = 0;
        while(head < queue.length) {
            const [currR, currC, currD, currCost] = queue[head++];
            
            if(currR === R - 1 && currC === C - 1) {
                answer = Math.min(currCost, answer);
                continue;
            }
            
            for(let nextD = 0; nextD < 4; nextD++) {
                const nr = currR + dirs[nextD][0];
                const nc = currC + dirs[nextD][1];
                
                // 테두리, 벽 감지 및 방문 여부 확인
                if(nr < 0 || nc < 0 || nr >= R || nc >= C || board[nr][nc]) {
                    continue;
                }
                
                const cornerCost = (currD === nextD) ? 0 : 500;
                const newCost = currCost + 100 + cornerCost;

                if (newCost < minCost[nr][nc][nextD]) {
                    minCost[nr][nc][nextD] = newCost;
                    queue.push([nr, nc, nextD, newCost]);
                }
            }
        }
    }
    
    bfs();
    
    return answer;
}