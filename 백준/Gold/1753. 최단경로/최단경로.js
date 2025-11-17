const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

  class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(idx) {
        return Math.floor((idx - 1 ) / 2);
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
        if(this.heap.length === 0) return;
        if(this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return root;
    }

    heapifyUp() {
        let idx = this.heap.length - 1;

        while(idx > 0) {
            const parent = this.getParentIndex(idx);
            if(this.heap[parent][1] < this.heap[idx][1]) break;
            this.swap(idx, parent);
            idx = parent;
        }
    }

    heapifyDown() {
        const length = this.heap.length;
        let idx = 0;

        while(this.getLeftChildIndex(idx) < length) {
            const left = this.getLeftChildIndex(idx);
            const right = this.getRightChildIndex(idx);

            let smaller = left;

            if(right < length && this.heap[right][1] < this.heap[left][1]) {
                smaller = right;
            }

            if(this.heap[idx][1] < this.heap[smaller][1]) break;
            this.swap(idx, smaller);
            idx = smaller;
        }
    }
}

// V: 정점의 갯수
const V = input[0].split(" ").map(Number)[0];
const infos = input.slice(2).map(str => str.split(' ').map(Number));

const startNode = parseInt(input[1]);
const graph = Array.from({length: V + 1}, () => []);

for(const [a, b, c] of infos) {
    graph[a].push([b, c]);
}

const dists = Array(V + 1).fill(Infinity);
dists[startNode] = 0;

const minHeap = new MinHeap();
minHeap.push([startNode, 0]);

while(minHeap.size()) {
    const [node, dist] = minHeap.pop();
    if(dists[node] < dist) continue;

    for(const [nextNode, nextDist] of graph[node]) {
        const newDist = dist + nextDist;
        if(newDist < dists[nextNode]) {
            dists[nextNode] = newDist;
            minHeap.push([nextNode, newDist]);
        }
    }
}

for(let i = 1; i < dists.length; i++) {
    console.log(dists[i] === Infinity ? "INF" : dists[i]);
}