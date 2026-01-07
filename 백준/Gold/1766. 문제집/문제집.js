"use strict";

const fs = require("fs");

const input = fs.readFileSync(0).toString().split("\n");
const [N, M] = input[0].split(" ").map(Number);

// 1. 최소 힙(Min-Heap) 구현
class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  pop() {
    if (this.size() === 1) return this.heap.pop();
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return top;
  }

  size() {
    return this.heap.length;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) break;
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;
    while (index * 2 + 1 < this.heap.length) {
      let left = index * 2 + 1;
      let right = index * 2 + 2;
      let smallerChild = right < this.heap.length && this.heap[right] < this.heap[left] ? right : left;

      if (this.heap[index] <= this.heap[smallerChild]) break;
      [this.heap[index], this.heap[smallerChild]] = [this.heap[smallerChild], this.heap[index]];
      index = smallerChild;
    }
  }
}

function solve() {
  const inDegree = new Array(N + 1).fill(0);
  const graph = Array.from({ length: N + 1 }, () => []);

  // 2. 그래프 및 진입 차수 데이터 구축
  for (let i = 1; i <= M; i++) {
    const [prev, next] = input[i].split(" ").map(Number);
    graph[prev].push(next);
    inDegree[next]++;
  }

  const heap = new MinHeap();
  const result = [];

  // 3. 진입 차수가 0인 노드를 힙에 삽입
  for (let i = 1; i <= N; i++) {
    if (inDegree[i] === 0) {
      heap.push(i);
    }
  }

  // 4. 위상 정렬 수행
  while (heap.size() > 0) {
    const current = heap.pop();
    result.push(current);

    for (const next of graph[current]) {
      inDegree[next]--;
      if (inDegree[next] === 0) {
        heap.push(next);
      }
    }
  }

  console.log(result.join(" "));
}

solve();