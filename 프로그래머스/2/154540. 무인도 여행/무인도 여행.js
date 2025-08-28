// BFS 알고리즘 활용
const solution = (maps) => {
    const answer = [];
    
    const R = maps.length; // 행 크기
    const C = maps[0].length; // 열 크기
    
    // 4방향 정의
    const dy = [-1, 1, 0, 0];
    const dx = [0, 0, -1, 1];
    
    const visited = Array.from({length: R}, () => Array(C).fill(false));
    
    const bfs = (row, col) => {
        const queue = [];
        queue.push([row, col]);
        
        // 방문 처리
        visited[row][col] = true;
        
        let sum = 0;
        
        while(queue.length) {
            const [startRow, startCol] = queue.shift();
            sum += parseInt(maps[startRow][startCol]);
            
            for(let i = 0; i < 4; i++) {
                const ny = startRow + dy[i];
                const nx = startCol + dx[i];
                
                if(!(ny < 0 || ny >= R || nx < 0 || nx >= C) && !visited[ny][nx] && maps[ny][nx] !== 'X') {
                    visited[ny][nx] = true;
                    queue.push([ny, nx]);
                }
            }
        }
        
        answer.push(sum);
    }
    
    for(let row = 0; row < R; row++) {
        for(let col = 0; col < C; col++) {
            if(!visited[row][col] && maps[row][col] !== 'X') {
                bfs(row, col);
            }
        }
    }
    
    return answer.length ? answer.sort((a, b) => a - b) : [-1];
}