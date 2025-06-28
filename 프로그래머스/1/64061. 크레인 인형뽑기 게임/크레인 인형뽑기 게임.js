const solution = (board, moves) => {
    let bucket = []; // 뽑은 인형을 담을 배열
    let count = 0; // 터뜨려진 인형의 갯수

    // 이동 배열 순회
    for(let i = 0; i < moves.length; i++) {
        let doll = 0; // 뽑은 인형
        // board행 순회
        for(let j = 0; j < board.length; j++) {
            if(board[j][moves[i] - 1] === 0) {
                continue;
            } else {
                doll = board[j][moves[i] - 1];
                board[j][moves[i] - 1] = 0;
                break;
            }
        }

        if(doll === 0) continue;

        // 바구니 제일 위에 있는 인형이 뽑은 인형과 같다면
        if(bucket.at(-1) === doll) {
            bucket.pop();
            count += 2;
        } else {
            bucket.push(doll);
        }
    }

    return count;
}