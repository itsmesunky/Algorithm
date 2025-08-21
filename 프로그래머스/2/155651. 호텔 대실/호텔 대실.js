class MinHeap {
  constructor() {
    this.heap = [];
  }

  // 값 삽입
  push(value) {
    this.heap.push(value);
    this._bubbleUp();
  }

  // 최소값 반환 + 제거
  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._bubbleDown();
    return min;
  }

  // 최소값 확인 (제거 X)
  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  _bubbleUp() {
    let idx = this.heap.length - 1;
    while (idx > 0) {
      const parent = Math.floor((idx - 1) / 2);
      if (this.heap[parent] <= this.heap[idx]) break;
      [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
      idx = parent;
    }
  }

  _bubbleDown() {
    let idx = 0;
    const length = this.heap.length;

    while (true) {
      let left = idx * 2 + 1;
      let right = idx * 2 + 2;
      let smallest = idx;

      if (left < length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }
      if (right < length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }

      if (smallest === idx) break;
      [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
      idx = smallest;
    }
  }
}


const convertTime = (str) => {
  const [hour, min] = str.split(":").map(Number);
  return hour * 60 + min;
}

const solution = (book_time) => {
  const reservations = book_time
    .map(([checkIn, checkOut]) => [convertTime(checkIn), convertTime(checkOut)])
    .sort((a, b) => a[0] - b[0]);

  const rooms = new MinHeap();

  for (const [checkIn, checkOut] of reservations) {
    if (rooms.size() && rooms.peek() + 10 <= checkIn) {
      rooms.pop(); // 가장 빨리 끝나는 방 재사용
    }
    rooms.push(checkOut);
  }

  return rooms.size();
}
