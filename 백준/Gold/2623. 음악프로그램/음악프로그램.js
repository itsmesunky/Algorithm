const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const infos = input.map((str) => str.split(" ").slice(1).map(Number));

const graph = Array.from({ length: N + 1 }, () => []);
const inDegrees = Array(N + 1).fill(0);

for (let row = 0; row < M; row++) {
  for (let col = 1; col < infos[row].length; col++) {
    const prev = infos[row][col - 1];
    const curr = infos[row][col];
    graph[prev].push(curr);
    inDegrees[curr]++;
  }
}

let head = 0;
const queue = [];
for (let i = 1; i <= N; i++) {
  if (inDegrees[i] === 0) queue.push(i);
}

while (head < queue.length) {
  const node = queue[head++];

  for (const nextNode of graph[node]) {
    if (--inDegrees[nextNode] === 0) queue.push(nextNode);
  }
}

if (queue.length === N) {
  console.log(queue.join("\n"));
} else {
  console.log(0);
}
