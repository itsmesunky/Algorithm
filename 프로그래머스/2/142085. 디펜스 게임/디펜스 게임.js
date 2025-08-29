class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // 부모 노드의 인덱스
    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    // 왼쪽 자식 노드의 인덱스
    getLeftChildIndex(i) {
        return 2 * i + 1;
    }

    // 오른쪽 자식 노드의 인덱스
    getRightChildIndex(i) {
        return 2 * i + 2;
    }

    // 두 노드의 위치를 교환
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    // 새로운 요소를 추가하고 힙 속성을 유지
    insert(item) {
        this.heap.push(item);
        let currentIndex = this.heap.length - 1;
        while (currentIndex > 0 && this.heap[currentIndex] > this.heap[this.getParentIndex(currentIndex)]) {
            this.swap(currentIndex, this.getParentIndex(currentIndex));
            currentIndex = this.getParentIndex(currentIndex);
        }
    }

    // 최대값(루트 노드)을 제거하고 반환
    extractMax() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return max;
    }
    
    // 아래로 내려가면서 힙 속성을 유지
    heapifyDown(index) {
        let maxIndex = index;
        const leftChildIndex = this.getLeftChildIndex(index);
        const rightChildIndex = this.getRightChildIndex(index);

        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[maxIndex]) {
            maxIndex = leftChildIndex;
        }

        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[maxIndex]) {
            maxIndex = rightChildIndex;
        }

        if (index !== maxIndex) {
            this.swap(index, maxIndex);
            this.heapifyDown(maxIndex);
        }
    }
}

function solution(n, k, enemy) {
    const heap = new MaxHeap();
    let totalRounds = 0;

    for (let i = 0; i < enemy.length; i++) {
        // 현재 라운드의 적 수
        const currentEnemy = enemy[i];
        
        // 병사를 사용
        n -= currentEnemy;
        heap.insert(currentEnemy);

        // 병사가 부족하면 무적권 사용
        if (n < 0) {
            // 무적권이 남아있을 경우
            if (k > 0) {
                const mostExpensive = heap.extractMax();
                n += mostExpensive; // 가장 많은 병사를 쓴 라운드를 무적권으로 해결
                k--; // 무적권 하나 소모
            } else {
                // 무적권이 없으면 게임 오버
                return i;
            }
        }
        totalRounds++;
    }

    // 모든 라운드를 성공적으로 마쳤을 경우
    return totalRounds;
}