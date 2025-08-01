class MinHeap {
  constructor() {
    this.heap = [];
  }

  // 힙의 크기를 반환합니다.
  size() {
    return this.heap.length;
  }

  // 힙에 값을 추가합니다.
  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  // 힙에서 최솟값을 제거하고 반환합니다.
  pop() {
    if (this.size() === 0) {
      return null;
    }
    this.swap(0, this.size() - 1);
    const value = this.heap.pop();
    this.bubbleDown();
    return value;
  }

  // 부모 노드의 인덱스를 반환합니다.
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  // 왼쪽 자식 노드의 인덱스를 반환합니다.
  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  // 오른쪽 자식 노드의 인덱스를 반환합니다.
  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  // 두 노드의 위치를 바꿉니다.
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  // 새로 추가된 값을 제자리를 찾아 올라가게 합니다.
  bubbleUp() {
    let currentIndex = this.size() - 1;
    let parentIndex = this.getParentIndex(currentIndex);

    while (
      currentIndex > 0 &&
      this.heap[currentIndex] < this.heap[parentIndex]
    ) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.getParentIndex(currentIndex);
    }
  }

  // 최솟값이 제거된 후 새로운 루트 노드를 제자리를 찾아 내려가게 합니다.
  bubbleDown() {
    let currentIndex = 0;
    while (true) {
      const leftChildIndex = this.getLeftChildIndex(currentIndex);
      const rightChildIndex = this.getRightChildIndex(currentIndex);
      let minIndex = currentIndex;

      if (
        leftChildIndex < this.size() &&
        this.heap[leftChildIndex] < this.heap[minIndex]
      ) {
        minIndex = leftChildIndex;
      }

      if (
        rightChildIndex < this.size() &&
        this.heap[rightChildIndex] < this.heap[minIndex]
      ) {
        minIndex = rightChildIndex;
      }

      if (minIndex === currentIndex) {
        break;
      }

      this.swap(currentIndex, minIndex);
      currentIndex = minIndex;
    }
  }
}

function solution(scoville, K) {
  const minHeap = new MinHeap();

  // 1. 모든 스코빌 지수를 힙에 넣습니다.
  for (const s of scoville) {
    minHeap.push(s);
  }

  let mixCount = 0;

  // 2. 가장 작은 값이 K 이상이 될 때까지 반복합니다.
  while (minHeap.size() >= 2 && minHeap.heap[0] < K) {
    const first = minHeap.pop();
    const second = minHeap.pop();
    const mixed = first + second * 2;
    minHeap.push(mixed);
    mixCount++;
  }

  // 3. 모든 음식을 섞었는데도 K를 넘지 못하는 경우
  if (minHeap.heap[0] < K) {
    return -1;
  }

  return mixCount;
}