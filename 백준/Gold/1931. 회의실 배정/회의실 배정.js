const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// 회의 수
const N = parseInt(input[0]);

// 회의 배열
const arr = input.slice(1).map((item) => item.split(' ').map(Number));

// 회의 배열 정렬
// 기준 1. 종료시간 오름차순
// 기준 2. 시작시간 오름차순
arr.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

// 종료 시간
let currEndTimes = 0;

let answer = 0;

for (let [start, end] of arr) {
  if (currEndTimes <= start) {
    answer++;
    currEndTimes = end;
  }
}

console.log(answer);