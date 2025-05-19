const solution = (board) => {
    const len = board.length;
    
    const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
    const dy = [-1, 0, 1, -1, 1, -1, 0, 1];
    
    const copiedBoard = Array.from({length: len}, () => Array(len).fill(0));
    
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len; j++) {
            if(board[i][j] === 1) {
                copiedBoard[i][j] = 1;
                
                for(let k = 0; k < 8; k++) {
                    let mx = i + dx[k];
                    let my = j + dy[k];
                    
                    if(mx >= 0 && mx < len && my >= 0 && my < len) {
                        copiedBoard[mx][my] = 1;
                    }
                }
            }
        }
    }
    
    return copiedBoard.flat().filter(v => v === 0).length;
}