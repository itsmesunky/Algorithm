const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let lineIdx = 0;
const T = +input[lineIdx++]; // 테스트 케이스 개수

for (let t = 0; t < T; t++) {
  const [N, K] = input[lineIdx++].split(' ').map(Number);
  
  // 건물을 짓는데 걸리는 시간 (1번 건물부터 쓰기 위해 앞에 0 추가)
  const buildTimes = [0, ...input[lineIdx++].split(' ').map(Number)];
  
  const graph = Array.from({ length: N + 1 }, () => []);
  const indegree = Array(N + 1).fill(0);
  
  // DP 테이블: 해당 건물까지 짓는 데 걸리는 '총 소요 시간'
  // 초기값은 자기 자신의 건설 시간으로 설정
  const dp = [...buildTimes];

  // 그래프 구성 및 진입차수 계산
  for (let i = 0; i < K; i++) {
    const [prev, next] = input[lineIdx++].split(' ').map(Number);
    graph[prev].push(next);
    indegree[next]++;
  }

  const targetW = +input[lineIdx++]; // 승리 목표 건물

  // 1. 위상 정렬 시작: 진입 차수가 0인(선행 조건 없는) 건물 큐에 삽입
  const queue = [];
  for (let i = 1; i <= N; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }

  let head = 0;
  while (head < queue.length) {
    const cur = queue[head++];

    if (cur === targetW) {
        break;
    }

    for (const next of graph[cur]) {
      dp[next] = Math.max(dp[next], dp[cur] + buildTimes[next]);

      indegree[next]--;

      if (indegree[next] === 0) {
        queue.push(next);
      }
    }
  }

  console.log(dp[targetW]);
}