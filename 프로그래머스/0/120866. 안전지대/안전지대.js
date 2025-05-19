const solution = (board) => {
    const n = board.length;
    const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
    const dy = [-1, 0, 1, -1, 1, -1, 0, 1];

    const danger = Array.from({ length: n }, () => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 1) {
                danger[i][j] = 1;
                for (let d = 0; d < 8; d++) {
                    const ni = i + dx[d];
                    const nj = j + dy[d];
                    if (ni >= 0 && ni < n && nj >= 0 && nj < n) {
                        danger[ni][nj] = 1;
                    }
                }
            }
        }
    }

    return danger.flat().filter(v => v === 0).length;
};
