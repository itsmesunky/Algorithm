const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

// [노드 갯수, 간선 갯수, 탐색 시작 노드]
const [N, M, V] = input[0].split(' ').map(Number);
const infos = input.slice(1).map((str) => str.split(' ').map(Number));

const graph = Array.from({ length: N + 1 }, () => []);

for (const [a, b] of infos) {
  graph[a].push(b);
  graph[b].push(a);
}

graph.forEach((array) => array.sort((a, b) => a - b));

// DFS를 위한 visited 배열
const visited = Array(N + 1).fill(false);
visited[V] = true;
let dfs = String(V);

const DFS = (node) => {
  const nodes = graph[node];

  for (let i = 0; i < nodes.length; i++) {
    const next = nodes[i];
    if (!visited[next]) {
      visited[next] = true;
      dfs += ' ' + String(next);
      DFS(next);
    }
  }
};

let bfs = String(V);
const BFS = () => {
  const visited = Array(N + 1).fill(false);
  visited[V] = true;
  const queue = [V];
  let head = 0;

  while (head < queue.length) {
    const nodes = graph[queue[head++]];

    for (let i = 0; i < nodes.length; i++) {
      const next = nodes[i];
      if (!visited[next]) {
        visited[next] = true;
        bfs += ' ' + String(next);
        queue.push(next);
      }
    }
  }
};

DFS(V);
console.log(dfs);
BFS();
console.log(bfs);
