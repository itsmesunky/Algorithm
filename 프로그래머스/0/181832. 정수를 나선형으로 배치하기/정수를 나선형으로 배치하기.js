const solution = (n) => {
    const result = Array.from({length: n}, () => Array(n).fill(0));
    
    // 델타 탐색(우 - 하 - 좌 - 상)
    let dx = [0, 1, 0, -1]; // 행
    let dy = [1, 0, -1, 0]; // 열
    
    let dir = 0;
    
    let x = 0;
    let y = 0;
    
    let num = 1;
    
    while(num <= Math.pow(n, 2)) {
        result[x][y] = num++;
        
        let mx = x + dx[dir];
        let my = y + dy[dir];
        
        if(mx >= n || mx < 0 || my >= n || my < 0 || result[mx][my] !== 0) {
            // 방향 전환
            dir = (dir + 1) % 4;
        }
        
        x += dx[dir];
        y += dy[dir];
    }
    
    return result;
}