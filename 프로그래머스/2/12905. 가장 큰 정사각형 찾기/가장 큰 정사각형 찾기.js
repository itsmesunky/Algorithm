const solution = (board) => {
    let answer = 0;
    
    const R = board.length;
    const C = board[0].length;
    
    if(R === 1 && C === 1 && board[0][0] === 1) {
        return 1;
    }
    
    // 원본 배열을 수정하지 않기 위해 deep copy
    const copyBoard = board.map(row => [...row]);
    
    for(let row = 0; row < R; row++) {
        for(let col = 0; col < C; col++) {
            if(0 < row && 0 < col && copyBoard[row][col] === 1) {
                // 현재 값이 1일 때 좌(←), 좌상(↖), 상(↑) 값 중 최솟값 확인
                const arr = [copyBoard[row][col-1], copyBoard[row-1][col-1], copyBoard[row-1][col]];
                copyBoard[row][col] = Math.min(...arr) + 1;
                answer = Math.max(answer, copyBoard[row][col]);
            }
        }
    }
    
    return Math.pow(answer, 2);
}