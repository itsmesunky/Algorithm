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

  peek() {
    return this.heap[0];
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  push(num) {
    this.heap.push(num);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    while (0 < index) {
      const parent = this.getParentIndex(index);
      if (this.heap[parent] <= this.heap[index]) break;
      this.swap(index, parent);
      index = parent;
    }
  }

  pop() {
    if (this.heap.length === 0) return 0;
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

      if (right < length && this.heap[right] < this.heap[left]) {
        smaller = right;
      }

      if (this.heap[index] <= this.heap[smaller]) break;
      this.swap(index, smaller);
      index = smaller;
    }
  }
}

const minHeap = new MinHeap();
const commands = input.slice(1).map(Number);
const result = [];
for (const command of commands) {
  if (command === 0) {
    result.push(minHeap.pop());
  } else {
    minHeap.push(command);
  }
}

console.log(result.join("\n"));