const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

// 입력값
const commands = input.slice(1).map(Number);

class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeftChildIndex(i) {
    return i * 2 + 1;
  }

  getRightChildIndex(i) {
    return i * 2 + 2;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  push(arr) {
    this.heap.push(arr);
    this.heapifyUp();
  }

  pop() {
    if (this.heap.length === 0) return 0;
    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return root;
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      const parent = this.getParentIndex(index);
      if (this.heap[parent][1] < this.heap[index][1]) break;

      // 절댓값이 같은 경우
      if (
        this.heap[parent][1] === this.heap[index][1] &&
        this.heap[parent][0] < this.heap[index][0]
      )
        break;
      this.swap(parent, index);
      index = parent;
    }
  }

  heapifyDown() {
    let index = 0;
    const length = this.heap.length;

    while (this.getLeftChildIndex(index) < length) {
      const left = this.getLeftChildIndex(index);
      const right = this.getRightChildIndex(index);

      let smaller = left;
      if (
        right < length &&
        (this.heap[right][1] < this.heap[left][1] ||
          (this.heap[right][1] === this.heap[left][1] &&
            this.heap[right][0] < this.heap[left][0]))
      ) {
        smaller = right;
      }

      if (this.heap[index][1] < this.heap[smaller][1]) break;

      // 절대값이 같은 경우
      if (
        this.heap[index][1] === this.heap[smaller][1] &&
        this.heap[index][0] < this.heap[smaller][0]
      ) {
        break;
      }

      this.swap(index, smaller);
      index = smaller;
    }
  }
}

const minHeap = new MinHeap();

let result = '';

for (const command of commands) {
  if (command !== 0) minHeap.push([command, Math.abs(command)]);
  else result += String(minHeap.pop()[0] ?? 0) + '\n';
}

console.log(result);
