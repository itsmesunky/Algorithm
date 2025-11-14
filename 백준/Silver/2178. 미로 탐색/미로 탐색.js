const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [R, C] = input.shift().split(' ').map(Number);
const grid = input.map(row => row.split('').map(Number));

const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];

const BFS = () => {
    const visited = Array.from({ length: R + 1 }, () => Array(C + 1).fill(false));
    visited[1][1] = true;

    let head = 0;
    const queue = [[1, 1, 1]]; // [현재 행, 현재 열, 이동 횟수]
    while(head < queue.length) {
        const [currR, currC, moves] = queue[head++];
        
        if(currR === R && currC === C) return moves;

        for(let i = 0; i < 4; i++) {
            const nr = currR + dirs[i][0];
            const nc = currC + dirs[i][1];

            // 테두리
            if(nr < 1 || R < nr || nc < 1 || C < nc) continue;

            if(!visited[nr][nc] && grid[nr - 1][nc - 1] === 1) {
                visited[nr][nc] = true;
                queue.push([nr, nc, moves + 1]);
            }
        }
    }
}

console.log(BFS());