const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let answer = 0;

const N = parseInt(input[0]);
const infos = input.slice(2).map((str) => str.split(' ').map(Number));
const graph = Array.from({ length: N + 1 }, () => []);

for (const [a, b] of infos) {
  graph[a].push(b);
  graph[b].push(a);
}

const visited = Array(N + 1).fill(false);
visited[1] = true;

const DFS = (node) => {
  const nodes = graph[node];

  for (let i = 0; i < nodes.length; i++) {
    const next = nodes[i];

    if (!visited[next]) {
      visited[next] = true;
      answer++;
      DFS(next);
    }
  }
};

DFS(1);
console.log(answer);