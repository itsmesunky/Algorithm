function solution(board) {
    const R = board.length;
    const C = board[0].length;
    const visited = Array.from({ length: R }, () => Array(C).fill(false));
    const queue = [];

    // Find starting position 'R' and add it to the queue
    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            if (board[i][j] === 'R') {
                queue.push([i, j, 0]); // [row, col, moves]
                visited[i][j] = true;
                break;
            }
        }
    }

    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];

    while (queue.length > 0) {
        const [currR, currC, moves] = queue.shift();

        // Check if we've reached the goal 'G'
        if (board[currR][currC] === 'G') {
            return moves;
        }

        // Explore all four directions
        for (let i = 0; i < 4; i++) {
            let nextR = currR;
            let nextC = currC;

            // Slide until hitting a wall 'D' or the board edge
            while (
                nextR >= 0 && nextR < R &&
                nextC >= 0 && nextC < C &&
                board[nextR][nextC] !== 'D'
            ) {
                nextR += dy[i];
                nextC += dx[i];
            }

            // Move back one step to get the final resting position
            nextR -= dy[i];
            nextC -= dx[i];

            // If the robot hasn't moved or the new position has already been visited, skip
            if (nextR === currR && nextC === currC || visited[nextR][nextC]) {
                continue;
            }

            // Add the new position to the queue and mark it as visited
            visited[nextR][nextC] = true;
            queue.push([nextR, nextC, moves + 1]);
        }
    }

    // If the queue is empty and the goal wasn't reached, it's impossible to get there
    return -1;
}