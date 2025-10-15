const solution = (grid) => {
    const result = [];
    
    const R = grid.length;
    const C = grid[0].length;
    
    const visited = Array.from({length: R}, () => 
                              Array.from({length: C}, () => 
                                        Array(4).fill(false)));
    
    // 상, 우, 하, 좌 순으로 정의
    const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    
    const getCycleLength = (row, col, dir) => {
        let count = 0;
        let currR = row;
        let currC = col;
        let currD = dir;

        while(!visited[currR][currC][currD]) {
            visited[currR][currC][currD] = true;
            count++;
            
            const char = grid[currR][currC];
            
            if(char === 'L') {
                currD = (currD + 3) % 4;
            } else if(char === 'R') {
                currD = (currD + 1) % 4;
            }
            
            const [dr, dc] = dirs[currD];
            
            currR = (currR + dr + R) % R;
            currC = (currC + dc + C) % C;
        }
        
        return count;
    }
    
    for(let row = 0; row < R; row++) {
        for(let col = 0; col < C; col++) {
            for(let dir = 0; dir < 4; dir++) {
                if(!visited[row][col][dir]) {
                    result.push(getCycleLength(row, col, dir));
                }
            }
        }
    }
    
    return result.sort((a, b) => a - b);
}