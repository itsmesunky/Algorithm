const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// 줄 서있는 사람의 수
const N = parseInt(input[0]);

// 각 사람이 돈을 인출하는 데 필요한 시간 오름차순 정렬
const sorted = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

// 각 사람이 돈을 인출하는 데 필요한 시간의 최소 합
let answer = 0;

// 현재까지 흐른 시간
let times = 0;

for (const needs of sorted) {
  answer += needs + times;
  times += needs;
}

console.log(answer);
