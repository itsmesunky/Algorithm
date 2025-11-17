const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = parseInt(input[0]); // 삼각형의 크기
const triangle = input.slice(1).map(str => str.split(' ').map(Number));

for(let row = n - 2; row >= 0; row--) {
    for(let col = 0; col < triangle[row].length; col++) {
        triangle[row][col] += Math.max(triangle[row+1][col], triangle[row+1][col + 1]);
    }
}

console.log(triangle[0][0])