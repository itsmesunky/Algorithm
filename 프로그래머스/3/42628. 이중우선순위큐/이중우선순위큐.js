class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    getParentIndex(idx) {
        return Math.floor((idx - 1) / 2);
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
    
    peek() {
        return this.heap[0];
    }
    
    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
    
    heapifyUp() {
        let index = this.heap.length - 1;
        
        while(index > 0) {
            const parent = this.getParentIndex(index);
            if(this.heap[parent] <= this.heap[index]) break;
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
            
            let smallerIndex = left;
            
            if(right < length && this.heap[right] < this.heap[left]) {
                smallerIndex = right;
            }
            
            if(this.heap[index] <= this.heap[smallerIndex]) break;
            
            this.swap(index, smallerIndex);
            index = smallerIndex;
        }
    }
    
    push(num) {
        this.heap.push(num);
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
    
}

class MaxHeap extends MinHeap {
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
            
            let largerIndex = left;
            
            if(right < length && this.heap[left] < this.heap[right]) {
                largerIndex = right;
            }
            
            if(this.heap[largerIndex] <= this.heap[index]) break;
            
            this.swap(index, largerIndex);
            index = largerIndex;
        }
    }
}

const solution = (operations) => {
    const minHeap = new MinHeap();
    const maxHeap = new MaxHeap();
    
    // 핵심(두 heap 내 무효한 값 삭제 로직)
    const map = new Map();
    const syncAndClear = (heap) => {
        while(heap.size() && map.get(heap.peek()) === 0) {
            heap.pop();
        }
    }
    
    for(const operation of operations) {
        const [command, data] = operation.split(" ");
        const num = +data;
        
        if(command === 'I') {
            minHeap.push(num);
            maxHeap.push(num);
            map.set(num, (map.get(num) || 0) + 1);
        } else {
            if(!minHeap.size() || !maxHeap.size()) continue;
            
            let valueToRemove;
            
            if(num === 1) {
                syncAndClear(maxHeap);
                valueToRemove = maxHeap.pop();
            } else {
                syncAndClear(minHeap);
                valueToRemove = minHeap.pop();
            }
            
            map.set(valueToRemove, map.get(valueToRemove) - 1);
        }
    }
    
    syncAndClear(maxHeap);
    syncAndClear(minHeap);
    
    return !minHeap.size() ? [0, 0] : [maxHeap.peek(), minHeap.peek()];
}
