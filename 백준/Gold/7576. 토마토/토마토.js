const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [M, N] = input[0].split(" ").map(Number);

const board = input.slice(1).map(str => str.split(' ').map(Number));

const visited = Array.from({length: N}, () => Array(M).fill(false));

let total = M * N; // 전체 토마토의 수
let ripeTomatos = 0; // 익은 토마토의 수
let notRipeTomatos = 0; // 익지 않은 토마토의 수

const queue = [];
board.forEach((row, i) => row.forEach((_,  j) => {
    const status = board[i][j];
    if(status === 1) {
        ripeTomatos++;
        queue.push([i, j, 0]);
        visited[i][j] = true;
    } else if(status === 0) {
        notRipeTomatos++;
    }
}));

let answer = 0;

if(ripeTomatos === total) { // 처음부터 모든 토마토가 익어있는 상태인 경우
    console.log(0);
    return;
} else {
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let head = 0;
    while(head < queue.length) {
        const [currR, currC, days] = queue[head++];
        answer = days;

        for(let i = 0; i < 4; i++) {
            const nr = currR + dirs[i][0];
            const nc = currC + dirs[i][1];

            // 가장자리 체크
            if(nr < 0 || nc < 0 || N <= nr || M <= nc) continue;

            // 방문여부 체크
            if(visited[nr][nc]) continue;

            // 빈 자리 체크
            if(board[nr][nc] === -1) continue;

            notRipeTomatos--;
            visited[nr][nc] = true;
            queue.push([nr, nc, days + 1]);
        }
    }
}

// 익지 않은 토마토가 한 개라도 남아 있는 경우
if(notRipeTomatos) {
    console.log(-1);
} else {
    console.log(answer);
}