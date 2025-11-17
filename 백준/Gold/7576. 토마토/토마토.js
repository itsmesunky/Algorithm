const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [M, N] = input[0].split(" ").map(Number);

const board = input.slice(1).map(str => str.split(' ').map(Number));

const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];

const queue = [];
for(let row = 0; row < N; row++) {
    for(let col = 0; col < M; col++) {
        if(board[row][col] === 1) queue.push([row, col])
    }
}

let head = 0;
while(head < queue.length) {
    const [currR, currC] = queue[head++];

    for(let i = 0; i < 4; i++) {
        const nr = currR + dirs[i][0];
        const nc = currC + dirs[i][1];

        // 가장자리  및 빈 자리 체크
        if(nr < 0 || nc < 0 || N <= nr || M <= nc || board[nr][nc] !== 0) continue;

        board[nr][nc] = board[currR][currC] + 1;
        queue.push([nr, nc]);
    }
}

let answer = 0;

for(let row = 0; row < N; row++) {
    for(let col = 0; col < M; col++) {
        // 안 익은 토마토가 한 개라도 있는 경우
        if(board[row][col] === 0) {
            console.log(-1);
            return;
        }
        answer = Math.max(answer, board[row][col]);
    }
}

console.log(answer - 1);