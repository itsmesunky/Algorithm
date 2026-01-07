const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);

// 보석 정보 (무게 M, 가격 V)
const jewels = [];
for (let i = 1; i <= N; i++) {
  jewels.push(input[i].split(' ').map(Number));
}

// 가방 정보 (최대 무게 C)
const bags = [];
for (let i = N + 1; i <= N + K; i++) {
  bags.push(Number(input[i]));
}

// 1. 정렬
jewels.sort((a, b) => a[0] - b[0]); // 무게 기준 오름차순
bags.sort((a, b) => a - b); // 가방 용량 기준 오름차순

// 2. Max Heap 구현
class MaxHeap {
  constructor() {
    this.heap = [];
  }
  push(val) {
    this.heap.push(val);
    this.bubbleUp();
  }
  pop() {
    if (this.size() === 0) return null;
    if (this.size() === 1) return this.heap.pop();
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return max;
  }
  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] >= this.heap[index]) break;
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      index = parentIndex;
    }
  }
  bubbleDown() {
    let index = 0;
    while (true) {
      let leftChild = index * 2 + 1;
      let rightChild = index * 2 + 2;
      let largest = index;

      if (leftChild < this.heap.length && this.heap[leftChild] > this.heap[largest]) {
        largest = leftChild;
      }
      if (rightChild < this.heap.length && this.heap[rightChild] > this.heap[largest]) {
        largest = rightChild;
      }
      if (largest === index) break;
      [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
      index = largest;
    }
  }
  size() {
    return this.heap.length;
  }
}

// 3. 그리디 알고리즘 수행
let totalPrice = 0;
const pq = new MaxHeap();
let jewelIndex = 0;

for (let i = 0; i < K; i++) {
  const currentBagLimit = bags[i];

  // 현재 가방에 담을 수 있는 모든 보석을 힙에 추가
  while (jewelIndex < N && jewels[jewelIndex][0] <= currentBagLimit) {
    pq.push(jewels[jewelIndex][1]);
    jewelIndex++;
  }

  // 가방에 넣을 수 있는 보석 중 가장 비싼 것 선택
  const mostExpensive = pq.pop();
  if (mostExpensive !== null) {
    totalPrice += mostExpensive;
  }
}

console.log(totalPrice);