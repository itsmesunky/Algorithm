const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let T = parseInt(input[0]);
let lineIdx = 1;

const results = [];

while (T--) {
  const [A, B] = input[lineIdx++].split(" ").map(Number);
  
  // visited: 방문 여부 체크 (메모리 절약을 위해 boolean 대신 1/0 혹은 true/false)
  const visited = new Array(10000).fill(false);
  visited[A] = true;
  
  // Queue: [현재 숫자, 명령어 문자열]
  const queue = [[A, ""]];
  let head = 0;
  
  let found = false;

  while (head < queue.length) {
    const [currNum, currCmd] = queue[head++];

    if (currNum === B) {
      results.push(currCmd);
      found = true;
      break;
    }

    // 1. D 연산
    // (n * 2) % 10000
    const D = (currNum * 2) % 10000;
    if (!visited[D]) {
      visited[D] = true;
      queue.push([D, currCmd + "D"]);
    }

    // 2. S 연산
    // 0이면 9999, 아니면 n-1
    const S = currNum === 0 ? 9999 : currNum - 1;
    if (!visited[S]) {
      visited[S] = true;
      queue.push([S, currCmd + "S"]);
    }

    // 3. L 연산 (수학적 회전)
    // 1234 -> 2341 : (1234 % 1000 = 234) * 10 + (1234 / 1000 = 1)
    const L = (currNum % 1000) * 10 + Math.floor(currNum / 1000);
    if (!visited[L]) {
      visited[L] = true;
      queue.push([L, currCmd + "L"]);
    }

    // 4. R 연산 (수학적 회전)
    // 1234 -> 4123 : (1234 % 10 = 4) * 1000 + (1234 / 10 = 123)
    const R = (currNum % 10) * 1000 + Math.floor(currNum / 10);
    if (!visited[R]) {
      visited[R] = true;
      queue.push([R, currCmd + "R"]);
    }
  }
}

console.log(results.join("\n"));