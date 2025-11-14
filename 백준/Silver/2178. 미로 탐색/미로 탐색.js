const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [R, C] = input.shift().split(' ').map(Number); 
const grid = input.map(row => row.split('').map(Number)); 

const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];

const BFS = () => {
    const visited = Array.from({ length: R }, () => Array(C).fill(false));
    
    visited[0][0] = true;
    let head = 0;
    const queue = [[0, 0, 1]]; 

    while(head < queue.length) {
        const [currR, currC, moves] = queue[head++];
        
        if(currR === R - 1 && currC === C - 1) return moves; 

        for(let i = 0; i < 4; i++) {
            const nr = currR + dirs[i][0];
            const nc = currC + dirs[i][1];

            if(nr < 0 || R <= nr || nc < 0 || C <= nc) continue;

            if(!visited[nr][nc] && grid[nr][nc] === 1) { 
                visited[nr][nc] = true; // 다음 칸을 방문 처리
                queue.push([nr, nc, moves + 1]);
            }
        }
    }
}

console.log(BFS());