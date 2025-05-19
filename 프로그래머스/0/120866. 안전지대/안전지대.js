const solution = (board) => {
    let result = 0;
    
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board.length; j++) {
            if(board[i][j] === 1) {
                // 좌
                if(j > 0) {
                    if(board[i][j-1] !== 1) {
                        board[i][j-1] = 2;    
                    }
                }
                
                // 우
                if(j < board.length - 1) {
                    if(board[i][j+1] !== 1) {
                        board[i][j+1] = 2;
                    }
                }
                
                // 위
                if(i > 0) {
                    if(board[i-1][j] !== 1) {
                        board[i-1][j] = 2;    
                    }

                    // 상좌
                    if(j > 0) {
                        if(board[i-1][j-1] !== 1) {
                            board[i-1][j-1] = 2;    
                        }
                    }
                    
                    // 상우
                    if(j < board.length - 1) {
                        if(board[i-1][j+1] !== 1) {
                            board[i-1][j+1] = 2;    
                        }
                    }
                }
                
                // 하
                if(i < board.length - 1) {
                    if(board[i+1][j] !== 1) {
                        board[i+1][j] = 2;    
                    }
                    
                    // 하좌
                    if(j > 0) {
                        if(board[i+1][j-1] !== 1) {
                            board[i+1][j-1] = 2;
                        }
                    }
                    
                    // 하우
                    if(j < board.length -1) {
                        if(board[i+1][j+1] !== 1) {
                            board[i+1][j+1] = 2;    
                        }
                    }
                }
            }
        }
    }
    
    board.forEach(arr => arr.forEach(item => {
      if(item === 0) result += 1;
    }))

    return result;
}