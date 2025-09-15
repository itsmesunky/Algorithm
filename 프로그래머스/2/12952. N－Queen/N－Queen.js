const solution = (n) => {
    let cnt = 0;
    
    const queen = Array(n).fill(-1);
    
    const isValid = (row, col) => {
        for(let prevRow = 0; prevRow < row; prevRow++) {
            const prevCol = queen[prevRow];
            
            // 열 체크
            if(prevCol === col) {
                return false;
            }
            
            // 대각선 체크
            if(Math.abs(prevRow - row) === Math.abs(prevCol - col)) {
                return false;
            }
        }
        
        return true;
    }
    
    const recursive = (row) => {
        if(row === n) {
            cnt++;
            return;
        }
        
        for(let col = 0; col < n; col++) {
            if(isValid(row, col)) {
                queen[row] = col;
                recursive(row + 1);
                // 백트래킹
                queen[row] = -1;
            }
        }
    }
    
    recursive(0);
    
    return cnt;
}