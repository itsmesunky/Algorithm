/**
* 문제 해결 시나리오
* 1. 주어지는 board에서 'O'와 'X'의 개수를 저장
* 2. 개수 비교를 통해, 규칙에 맞는 게임판인지 아닌지 판단하면 됨
*/
const solution = (board) => {
    // 1. 'O', 'X' 개수 판단
    let oCnt = 0, xCnt = 0;
    board.forEach(str => [...str].forEach(char => char === 'O' ? oCnt++ : char === 'X' && xCnt++));
    
    // 2. 개수 비교
    if(oCnt < xCnt || oCnt - xCnt > 1) {
        return 0;
    }
    
    /**
    * isWin: 특정 문자를 매개변수로 전달받아, 해당 문자의 틱택토 게임 승리 결과 반환 함수
    * @param(char): 'O' 또는 'X'
    */
    const isWin = (char) => {
        const lines = [
            // 1. 행 체크
            [[0, 0], [0, 1], [0, 2]], [[1, 0], [1, 1], [1, 2]], [[2, 0], [2, 1], [2, 2]],
            // 2. 열 체크
            [[0, 0], [1, 0], [2, 0]], [[0, 1], [1, 1], [2, 1]], [[0, 2], [1, 2], [2, 2]],
            // 3. 대각선 체크
            [[0, 0], [1, 1], [2, 2]], [[0, 2], [1, 1], [2, 0]]
        ];
        
        return lines.some(line => line.every(([r, c]) => board[r][c] === char));
    }
    
    const isOWin = isWin('O');
    const isXWin = isWin('X');
    
    // 둘 다 이긴 경우
    if(isOWin && isXWin) {
        return 0;
    }
    
    // O가 이겼는데 개수가 같은 경우
    if(isOWin && oCnt === xCnt) {
        return 0;
    }
    
    // X가 이겼는데 O가 더 많은 경우
    if(isXWin && oCnt > xCnt) {
        return 0;
    }
    
    
    return 1;
}