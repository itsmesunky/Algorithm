function solution(board, k) {
    let answer = 0;
    
    for(let i = 0; i < board.length; i++) {
        if(k < i) {
            break;
        } else {
            for(let j = 0; j < board[i].length; j++) {
                if(k < j) {
                    break;
                } else {
                    if(i + j <= k) {
                        answer += board[i][j];
                    }
                }
            }
        }
    }
    
    return answer;
}