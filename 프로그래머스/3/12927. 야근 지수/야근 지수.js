/**
* 문제 해결 시나리오
* 1. works를 n번 순회하며 가장 큰 값을 1씩 낮춤 → 최대힙 사용
* 2. 순회 종료 후, works 각 원소의 제곱값을 더한 값을 반환
*/
class MaxHeap {
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
    
    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
    
    pop() {
        if(this.heap.length === 0) return;
        if(this.heap.length === 1) return this.heap.pop();
        
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return root;
    }
    
    push(number) {
        this.heap.push(number);
        this.heapifyUp();
    }
    
    heapifyUp() {
        let index = this.heap.length - 1;
        while(index > 0) {
            const parent = this.getParentIndex(index);
            if(this.heap[index] <= this.heap[parent]) break;
            this.swap(index, parent);
            index = parent;
        }
    }
    
    heapifyDown() {
        const length = this.heap.length;
        let index = 0;
        
        while(this.getLeftChildIndex(index) < length) {
            const left = this.getLeftChildIndex(index);
            const right = this.getRightChildIndex(index);
            
            let larger = left;
            
            if(right < length && this.heap[left] < this.heap[right]) {
                larger = right;
            }
            
            if(this.heap[larger] <= this.heap[index]) break;
            
            this.swap(index, larger);
            index = larger;
        }
    }
    
}

const solution = (n, works) => {
    const maxHeap = new MaxHeap();
    
    for(const work of works) {
        maxHeap.push(work);
    }
    
    for(let i = 0; i < n; i++) {
        const max = maxHeap.pop();
        
        if(!max) {
            return 0;
        } else {
            maxHeap.push(max - 1);    
        }
    }
    
    return maxHeap.heap.reduce((acc, cur) => acc + cur ** 2, 0);
}