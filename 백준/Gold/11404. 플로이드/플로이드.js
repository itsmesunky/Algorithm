const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 입력값
const n = parseInt(input[0]); // 도시(정점)의 갯수
const infos = input.slice(2).map((str) => str.split(" ").map(Number));
const len = n + 1;

// n * n의 2차원 배열 생성
const floyd = Array.from({ length: len }, () => Array(len).fill(Infinity));

// 자기 자신과의 거리는 0
for (let row = 0; row < len; row++) {
  for (let col = 0; col < len; col++) {
    if (row === col) {
      floyd[row][col] = 0;
      break;
    }
  }
}

for (const [a, b, cost] of infos) {
  // a에서 b로 가는 비용
  const origin = floyd[a][b];
  // 최소 비용 갱신
  if (cost < origin) floyd[a][b] = cost;
}

for (let k = 1; k < len; k++) {
  for (let i = 1; i < len; i++) {
    for (let j = 1; j < len; j++) {
      // 다른 정점을 거쳐서 가는 게 더 저렴한 경우
      if (floyd[i][k] + floyd[k][j] < floyd[i][j]) {
        floyd[i][j] = floyd[i][k] + floyd[k][j];
      }
    }
  }
}

for (let row = 1; row < len; row++) {
  const answer = [];
  for (let col = 1; col < len; col++) {
    const cost = floyd[row][col];
    if (cost === Infinity) {
      answer.push(0);
    } else {
      answer.push(cost);
    }
  }
  console.log(...answer);
}
