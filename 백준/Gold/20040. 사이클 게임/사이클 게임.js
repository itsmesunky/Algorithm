const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const infos = input.map((str) => str.split(" ").map(Number));

const parent = Array.from({ length: n }, (_, i) => i);

function getParent(x) {
  if (parent[x] === x) return x;
  return parent[x] = getParent(parent[x]);
}

function unionFind(x, y) {
  const rootX = getParent(x);
  const rootY = getParent(y);

  if (rootX === rootY) return true;

  if (rootX < rootY) parent[rootY] = rootX;
  else if (rootY < rootX) parent[rootX] = rootY;
}

for (let i = 0; i < m; i++) {
  const [dot1, dot2] = infos[i];

  if (unionFind(dot1, dot2)) {
    console.log(i + 1);
    return;
  }
}

console.log(0);
