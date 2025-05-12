const solution = (keyinput, board) => {
    const answer = [0, 0];
    
    const maxUpValue = (board[1] - 1) / 2;
    const minDownValue = maxUpValue * -1;
    
    const maxRightValue = (board[0] - 1) / 2;
    const minLeftValue = maxRightValue * -1;
    
    for(const direction of keyinput) {
        const [curX, curY] = answer;
        
        switch(direction) {
            case "up":
                if(curY < maxUpValue) {
                    answer[1] += 1;
                }
                break;
            case "down":
                if(minDownValue < curY) {
                    answer[1] -= 1;
                }
                break;
            case "left":
                if(minLeftValue < curX) {
                    answer[0] -= 1;
                }
                break;
            case "right":
                if(curX < maxRightValue) {
                    answer[0] += 1;
                }
                break;
        }
    }
    
    return answer;
}
