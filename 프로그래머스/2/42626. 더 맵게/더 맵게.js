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
    
    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
    
    push(num) {
        this.heap.push(num);
        this.heapifyUp();
    }
    
    pop() {
        if(this.heap.length === 0) return undefined;
        if(this.heap.length === 1) return this.heap.pop();
        
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        
        return root;
    }
    
    heapifyUp() {
        let index = this.heap.length - 1;
        
        while(index > 0) {
            const parent = this.getParentIndex(index);
            if(this.heap[parent] <= this.heap[index]) return;
            this.swap(index, parent);
            index = parent;
        }
    }
    
    heapifyDown() {
        const length = this.heap.length;
        let index = 0;
        
        while(this.getLeftChildIndex(index) < length) {
            const left = this.getLeftChildIndex(index);
            const right= this.getRightChildIndex(index);
            
            let smallerNode = left;
            
            if(right < length && this.heap[right] < this.heap[left]) {
                smallerNode = right;
            }
            
            if(this.heap[index] <= this.heap[smallerNode]) break;
            
            this.swap(index, smallerNode);
            index = smallerNode;
        }
    }
}



const solution = (scoville, K) => {
    let count = 0;
    
    let minHeap = new MinHeap();
    
    for(const num of scoville) {
        minHeap.push(num);
    }
    
    while(minHeap.size() >= 2) {
        const minScovile1 = minHeap.pop();
        const minScovile2 = minHeap.pop();
        
        if(minScovile1 >= K) break;
        
        count++;
        
        const result = minScovile1 + (minScovile2 * 2);
        minHeap.push(result);
    }
    
    return minHeap.size() === 1 && minHeap.pop() < K ? -1 : count;
}