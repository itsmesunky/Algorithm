const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = parseInt(input[0]);

let answer = 0;

// queen[i]: 체스판의 i 행의 퀸 위치 열
const queen = Array(N).fill(-1);

/**
 * isValid - 해당 위치 퀸 배치 가능 여부 반환 함수
 * @param {number} row - 특정 행
 * @param {number} col  - 특정 열
 * @returns {boolean}
 */
const isValid = (row, col) => {
    for(let prevRow = 0; prevRow < row; prevRow++) {
        const prevCol = queen[prevRow];

        // 열 체크
        if(col === prevCol) return false;

        // 대각선 체크
        if(Math.abs(row - prevRow) === Math.abs(col - prevCol)) return false;
    }

    return true;
}


/**
 * recursive - 재귀적으로 각 행에 퀸 배치 및 백트래킹을 통한 재배치
 * @param {*} row 
 */
const recursive = (row) => {
    if(row === N) {
        answer++;
        return;
    }

    for(let col = 0; col < N; col++) {
        if(isValid(row, col)) {
            queen[row] = col;
            recursive(row + 1);
            queen[row] = -1; // 백트래킹
        }
    }
}

recursive(0);

console.log(answer);