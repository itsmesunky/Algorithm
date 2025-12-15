const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = +input[0];
let lineIdx = 1;
const answers = [];

// 자주 쓰는 상수는 밖으로 뺌
const MAX = 10000;

for (let i = 0; i < T; i++) {
  const [A, B] = input[lineIdx++].split(' ').map(Number);
  
  // visited[next] = true 대신, visited[next] = prev (이전 숫자)를 저장
  // 초기화 비용을 줄이기 위해 여기서 선언하거나 fill로 초기화
  const visited = new Array(MAX).fill(-1); 
  const command = new Array(MAX).fill(''); 
  
  // BFS 큐 초기화
  const queue = [A];
  let head = 0;
  
  visited[A] = A; // 시작점 방문 표시

  while (head < queue.length) {
    const cur = queue[head++];

    if (cur === B) {
      break; // 목표 도달 시 즉시 종료
    }

    // 4가지 연산 결과 미리 계산
    // 1. D: 2배 (나머지 연산)
    const nextD = (cur * 2) % 10000;
    if (visited[nextD] === -1) {
      visited[nextD] = cur;
      command[nextD] = 'D';
      queue.push(nextD);
    }

    // 2. S: -1 (0일 땐 9999)
    const nextS = cur === 0 ? 9999 : cur - 1;
    if (visited[nextS] === -1) {
      visited[nextS] = cur;
      command[nextS] = 'S';
      queue.push(nextS);
    }

    // 3. L: 왼쪽 회전 (수학적 계산)
    // 1234 -> 2341 : 1000으로 나눈 몫(1)을 뒤로, 나머지(234)를 앞으로(*10)
    const nextL = (cur % 1000) * 10 + Math.floor(cur / 1000);
    if (visited[nextL] === -1) {
      visited[nextL] = cur;
      command[nextL] = 'L';
      queue.push(nextL);
    }

    // 4. R: 오른쪽 회전 (수학적 계산)
    // 1234 -> 4123 : 10으로 나눈 나머지(4)를 앞으로(*1000), 몫(123)을 뒤로
    const nextR = (cur % 10) * 1000 + Math.floor(cur / 10);
    if (visited[nextR] === -1) {
      visited[nextR] = cur;
      command[nextR] = 'R';
      queue.push(nextR);
    }
  }

  // 역추적 (Backtracking)
  // B에서 시작해서 A가 나올 때까지 부모를 타고 올라감
  let path = '';
  let temp = B;
  
  while (temp !== A) {
    path = command[temp] + path; // 뒤에서부터 붙이거나, 나중에 reverse 해도 됨
    temp = visited[temp];
  }
  
  answers.push(path);
}

console.log(answers.join('\n'));