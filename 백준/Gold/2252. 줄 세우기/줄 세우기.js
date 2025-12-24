const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0].split(" ")[0]);
const infos = input.slice(1).map((str) => str.split(" ").map(Number));

const inDegrees = Array(N + 1).fill(0);
const graph = Array.from({ length: N + 1 }, () => []);
for (const [A, B] of infos) {
  graph[A].push(B);
  inDegrees[B]++;
}

const result = [];
const queue = [];

for (let i = 1; i <= N; i++) {
  if (inDegrees[i] === 0) queue.push(i);
}

let head = 0;
while (head < queue.length) {
  const currNode = queue[head++];
  result.push(currNode);

  for (const nextNode of graph[currNode]) {
    if (--inDegrees[nextNode] === 0) queue.push(nextNode);
  }
}

console.log(result.join(" "));