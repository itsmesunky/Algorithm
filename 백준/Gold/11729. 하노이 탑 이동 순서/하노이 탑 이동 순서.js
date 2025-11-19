const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 입력값
const n = parseInt(input[0]);

let count = 0;
let answer = "";

const hanoi = (num, from, to, via) => {
  if (num === 0) return;

  // 1. 맨 아래 원반 제외 모든 원반 보조 기둥으로 옮기기
  hanoi(num - 1, from, via, to);

  // 2. 맨 아래 원반 목표 기둥으로 옮기기
  answer += `\n${from} ${to}`;
  count++;

  // 3. 보조 기둥에 있던 원반들 목표 기둥으로 옮기기
  hanoi(num - 1, via, to, from);
};

hanoi(n, 1, 3, 2);
console.log(count, answer);
