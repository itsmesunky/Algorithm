const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 입력값
const N = parseInt(input[0]); // 도시의 갯수
const M = parseInt(input[1]); // 버스의 갯수
const infos = input.slice(2, M + 2).map((str) => str.split(" ").map(Number));
const [start, end] = input.at(-1).split(" ").map(Number);

// 다익스트라 구현을 위한 최소힙 구현
class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(idx) {
    return Math.floor((idx - 1) / 2);
  }

  getLeftChildIndex(idx) {
    return idx * 2 + 1;
  }

  getRightChildIndex(idx) {
    return idx * 2 + 2;
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
    let idx = this.heap.length - 1;

    while (idx > 0) {
      const parent = this.getParentIndex(idx);
      if (this.heap[parent][1] < this.heap[idx][1]) break;
      this.swap(idx, parent);
      idx = parent;
    }
  }

  heapifyDown() {
    let idx = 0;
    const length = this.heap.length;

    while (this.getLeftChildIndex(idx) < length) {
      const left = this.getLeftChildIndex(idx);
      const right = this.getRightChildIndex(idx);

      let smaller = left;

      if (right < length && this.heap[right][1] < this.heap[left][1])
        smaller = right;

      if (this.heap[idx][1] < this.heap[smaller][1]) break;
      this.swap(idx, smaller);
      idx = smaller;
    }
  }
}

const dists = Array(N + 1).fill(Infinity); // 1-based
dists[start] = 0;

const graph = Array.from({ length: N + 1 }, () => []);
for (const [from, to, cost] of infos) {
  graph[from].push([to, cost]);
}

const minHeap = new MinHeap();
minHeap.push([start, 0]);

while (minHeap.size()) {
  const [currNode, currDist] = minHeap.pop();
  if (dists[currNode] < currDist) continue;

  for (const [nextNode, nextDist] of graph[currNode]) {
    const newDist = currDist + nextDist;
    if (newDist < dists[nextNode]) {
      dists[nextNode] = newDist;
      minHeap.push([nextNode, newDist]);
    }
  }
}

console.log(dists[end]);
