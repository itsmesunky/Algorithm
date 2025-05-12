const solution = (keyinput, board) => {
    const move = {
        up: [0, 1],
        down: [0, -1],
        left: [-1, 0],
        right: [1, 0]
    };
    
    const [maxX, maxY] = [(board[0] - 1) / 2, ((board[1] - 1) / 2)];
    
    let curX = 0;
    let curY = 0;
    
    for(const key of keyinput) {
        const [mx, my] = move[key];
        
        const [movedX, movedY] = [curX + mx, curY + my];
        
        if(Math.abs(movedX) <= maxX && Math.abs(movedY) <= maxY) {
            curX = movedX;
            curY = movedY;
        }
    }
    
    return [curX, curY];
}