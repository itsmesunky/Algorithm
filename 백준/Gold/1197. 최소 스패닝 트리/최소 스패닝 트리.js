const input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

const [V, E] = input.shift().split(" ").map(Number);
const infos = input.map((str) => str.split(" ").map(Number));

// kruskal 알고리즘 활용을 위한 간선 비용 오름차순 정렬
infos.sort((a, b) => a[2] - b[2]);

const parent = Array.from({ length: V + 1 }, (_, i) => (0 < i ? i : Infinity));

const getParent = (x) => {
  if (parent[x] === x) return x;
  return (parent[x] = getParent(parent[x]));
};

const union = (x, y) => {
  const rootX = getParent(x);
  const rootY = getParent(y);

  if (rootX < rootY) parent[rootY] = rootX;
  else parent[rootX] = rootY;
};

// 그래프를 형성하지 않도록 함
const isUnion = (x, y) => getParent(x) === getParent(y);

let answer = 0;
for (const [A, B, C] of infos) {
  if (!isUnion(A, B)) {
    union(A, B);
    answer += C;
  }
}

console.log(answer);