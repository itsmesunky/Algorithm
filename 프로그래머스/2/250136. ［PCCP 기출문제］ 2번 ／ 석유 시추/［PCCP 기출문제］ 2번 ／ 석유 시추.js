const solution = (land) => {
    
    const R = land.length;
    const C = land[0].length;
    
    const visited = Array.from({length: R}, () => Array(C).fill(false));
    const cols = Array(C).fill(0);
    
    // 4방향 정의
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    const bfs = (row, col) => {
        let head = 0;
        let count = 1;
        const queue = [[row, col]];
        visited[row][col] = true;
        
        while(head < queue.length) {
            const [prevR, prevC] = queue[head++];
            
            for(let i = 0; i < 4; i++) {
                const nx = dx[i] + prevR;
                const ny = dy[i] + prevC;
                
                if(!(nx < 0 || nx >= R || ny < 0 || ny >= C)) {
                    if(land[nx][ny] && !visited[nx][ny]) {
                        visited[nx][ny] = true;
                        queue.push([nx, ny]);
                        count++;
                    }
                }
            }
        }
        
        const set = new Set(queue.map(([_, col]) => col));
        set.forEach(col => cols[col] += count);
    }
    
    for(let col = 0; col < C; col++) {
        for(let row = 0; row < R; row++) {
            if(land[row][col] && !visited[row][col]) {
                bfs(row, col);
            }
        }
    }
    
    return Math.max(...cols);
}