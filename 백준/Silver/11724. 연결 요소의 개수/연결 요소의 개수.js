const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

// 노드 갯수
const N = parseInt(input[0].split(' ')[0]);
const infos = input.slice(1).map((str) => str.split(' ').map(Number));
const graph = Array.from({ length: N + 1 }, () => []);

for (const [a, b] of infos) {
  graph[a].push(b);
  graph[b].push(a);
}

const visited = Array(N + 1).fill(false);

const DFS = (node) => {
  const nodes = graph[node];

  for (let i = 0; i < nodes.length; i++) {
    const next = nodes[i];

    if (!visited[next]) {
      visited[next] = true;
      DFS(next);
    }
  }
};

let answer = 0;

for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    visited[i] = true;
    DFS(i);
    answer++;
  }
}

console.log(answer);
