const input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

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

  heapifyUp() {
    let index = this.heap.length - 1;

    while (0 < index) {
      const parent = this.getParentIndex(index);
      if (this.heap[parent][1] <= this.heap[index][1]) break;
      this.swap(index, parent);
      index = parent;
    }
  }

  pop() {
    if (this.heap.length === 0) return;
    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return root;
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

      if (this.heap[index][1] <= this.heap[smaller][1]) break;
      this.swap(index, smaller);
      index = smaller;
    }
  }
}

const [N, _, X] = input.shift().split(" ").map(Number);
const infos = input.map((str) => str.split(" ").map(Number));

const fromToGraph = Array.from({ length: N + 1 }, () => []);
const toFromGraph = Array.from({ length: N + 1 }, () => []);

for (const [from, to, dist] of infos) {
  fromToGraph[from].push([to, dist]);
  toFromGraph[to].push([from, dist]);
}

const fromToDists = Array(N + 1).fill(Infinity);
fromToDists[X] = 0;

const toFromDists = Array(N + 1).fill(Infinity);
toFromDists[X] = 0;

function dijkstra(graph, dists) {
  const pq = new MinHeap();
  pq.push([X, 0]);

  while (pq.size()) {
    const [node, dist] = pq.pop();
    if (dists[node] < dist) continue;

    for (const [nextNode, nextDist] of graph[node]) {
      const newDist = dist + nextDist;
      if (newDist < dists[nextNode]) {
        dists[nextNode] = newDist;
        pq.push([nextNode, newDist]);
      }
    }
  }
}

dijkstra(fromToGraph, fromToDists);
dijkstra(toFromGraph, toFromDists);

let answer = Number.MIN_SAFE_INTEGER;
for (let i = 1; i <= N; i++) {
  const total = fromToDists[i] + toFromDists[i];
  answer = Math.max(answer, total);
}

console.log(answer);