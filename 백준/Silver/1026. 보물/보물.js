const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = parseInt(input[0]);

const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);

A.sort((a, b) => a - b);
B.sort((a, b) => b - a);

let result = 0;

for (let i = 0; i < N; i++) {
  result += A[i] * B[i];
}

console.log(result);
