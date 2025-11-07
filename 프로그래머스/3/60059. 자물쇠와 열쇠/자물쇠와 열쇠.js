function solution(key, lock) {
    const M = key.length;
    const N = lock.length;
    
    const boardSize = N + 2 * (M - 1);
    const board = Array.from(Array(boardSize), () => Array(boardSize).fill(0));
    
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            board[i + M - 1][j + M - 1] = lock[i][j];
        }
    }

    const rotateKey = (key) => {
        const M = key.length;
        const newKey = Array.from(Array(M), () => Array(M).fill(0));
        for (let i = 0; i < M; i++) {
            for (let j = 0; j < M; j++) {
                newKey[j][M - 1 - i] = key[i][j];
            }
        }
        return newKey;
    };

    const isOpened = (currentBoard) => {
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                if (currentBoard[i + M - 1][j + M - 1] !== 1) {
                    return false;
                }
            }
        }
        return true;
    };
    
    let currentKey = key;
    
    for (let rot = 0; rot < 4; rot++) {
        currentKey = rotateKey(currentKey);
        
        for (let r = 0; r <= boardSize - M; r++) {
            for (let c = 0; c <= boardSize - M; c++) {
                
                const tempBoard = JSON.parse(JSON.stringify(board));

                let isCollision = false;
                for (let i = 0; i < M; i++) {
                    for (let j = 0; j < M; j++) {
                        if (currentKey[i][j] === 1) {
                            if (tempBoard[r + i][c + j] === 1) {
                                isCollision = true;
                                break;
                            }
                            tempBoard[r + i][c + j] += currentKey[i][j];
                        }
                    }
                    if (isCollision) break;
                }

                if (isCollision) continue;

                if (isOpened(tempBoard)) {
                    return true;
                }
            }
        }
    }
    
    return false;
}