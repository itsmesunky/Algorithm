const input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input.shift()); // 도시의 개수
const m = parseInt(input.shift()); // 버스의 개수
const infos = input.map((str) => str.split(" ").map(Number));
const [S, E] = infos.pop();

const graph = Array.from({ length: n + 1 }, () => []);
for (const [start, end, cost] of infos) {
  graph[start].push([end, cost]);
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return index * 2 + 1;
  }

  getRightChildIndex(index) {
    return index * 2 + 2;
  }

  size() {
    return this.heap.length;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  push(arr) {
    this.heap.push(arr);
    this.heapifyUp();
  }

  pop() {
    if (this.heap.length === 0) return;
    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return root;
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    while (0 < index) {
      const parent = this.getParentIndex(index);
      if (this.heap[parent][1] <= this.heap[index][1]) break;
      this.swap(index, parent);
      index = parent;
    }
  }

  heapifyDown() {
    const length = this.heap.length;
    let index = 0;

    while (this.getLeftChildIndex(index) < length) {
      const left = this.getLeftChildIndex(index);
      const right = this.getRightChildIndex(index);

      let smaller = left;

      if (right < length && this.heap[right][1] < this.heap[left][1]) {
        smaller = right;
      }

      if (this.heap[index][1] < this.heap[smaller][1]) break;
      this.swap(index, smaller);
      index = smaller;
    }
  }
}

const parent = Array(n + 1).fill(-1);
parent[S] = 0;

const dists = Array(n + 1).fill(Infinity);
dists[0] = 0;
dists[S] = 0;

const pq = new MinHeap();
pq.push([S, 0]);

while (pq.size()) {
  const [node, dist] = pq.pop();
  if (dists[node] < dist) continue;

  const nodes = graph[node];
  for (const [nextNode, nextDist] of nodes) {
    const newDist = dist + nextDist;
    if (newDist < dists[nextNode]) {
      parent[nextNode] = node;
      dists[nextNode] = newDist;
      pq.push([nextNode, newDist]);
    }
  }
}

const paths = [];
function recursive(idx) {
  paths.push(idx);
  if (idx === S) return;
  recursive(parent[idx]);
}

recursive(E);

console.log(dists[E]);
console.log(paths.length);
console.log(paths.reverse().join(" "));
