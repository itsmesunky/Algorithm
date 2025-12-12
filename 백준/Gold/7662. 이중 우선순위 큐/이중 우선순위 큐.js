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

      if (right < length && this.heap[right] < this.heap[left]) {
        smaller = right;
      }

      if (this.heap[index] <= this.heap[smaller]) break;
      this.swap(index, smaller);
      index = smaller;
    }
  }
}

class MaxHeap extends MinHeap {
  constructor() {
    super();
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    while (0 < index) {
      const parent = this.getParentIndex(index);
      if (this.heap[index] <= this.heap[parent]) break;
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

      let largger = left;

      if (right < length && this.heap[left] < this.heap[right]) {
        largger = right;
      }

      if (this.heap[largger] <= this.heap[index]) break;
      this.swap(index, largger);
      index = largger;
    }
  }
}

let T = parseInt(input[0]);
let next = 1;

while (T--) {
  const K = parseInt(input[next++]);
  const commands = input.slice(next, next + K);

  const map = new Map();
  const minHeap = new MinHeap();
  const maxHeap = new MaxHeap();

  for (const command of commands) {
    let [char, num] = command.split(" ");
    num = parseInt(num);

    switch (char) {
      case "I":
        minHeap.push(num);
        maxHeap.push(num);
        if (!map.has(num)) map.set(num, 1);
        else map.set(num, map.get(num) + 1);
        break;
      case "D":
        if (num < 0) {
          const min = minHeap.pop();
          if (min !== undefined) {
            // 이미 삭제된 숫자인 경우
            if (map.get(min) <= 0) {
              while (minHeap.size()) {
                const nextNum = minHeap.pop();
                if (0 < map.get(nextNum)) {
                  map.set(nextNum, map.get(nextNum) - 1);
                  break;
                }
              }
            } else {
              map.set(min, map.get(min) - 1);
            }
          }
        } else {
          const max = maxHeap.pop();
          if (max !== undefined) {
            // 이미 삭제된 숫자인 경우
            if (map.get(max) <= 0) {
              while (maxHeap.size()) {
                const nextNum = maxHeap.pop();
                if (0 < map.get(nextNum)) {
                  map.set(nextNum, map.get(nextNum) - 1);
                  break;
                }
              }
            } else {
              map.set(max, map.get(max) - 1);
            }
          }
        }
        break;
    }
  }

  const result = [];

  while (maxHeap.size()) {
    const nextNum = maxHeap.pop();
    if (0 < map.get(nextNum)) {
      result.push(nextNum);
      break;
    }
  }

  while (minHeap.size()) {
    const nextNum = minHeap.pop();
    if (0 < map.get(nextNum)) {
      result.push(nextNum);
      break;
    }
  }

  if (result.length === 2) {
    console.log(...result);
  } else {
    console.log("EMPTY");
  }

  next += K;
}