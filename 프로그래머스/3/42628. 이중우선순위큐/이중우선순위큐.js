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
    
    const counts = new Map();
    let size = 0;

    const syncAndClean = (heap, counts) => {
        while (heap.size() > 0 && counts.get(heap.peek()) === 0) {
            heap.pop();
        }
    };

    for (const operation of operations) {
        const [command, dataStr] = operation.split(' ');
        const num = parseInt(dataStr);

        if (command === 'I') {
            minHeap.push(num);
            maxHeap.push(num);
            counts.set(num, (counts.get(num) || 0) + 1);
            size++;
        } else if (command === 'D') {
            if (size === 0) continue;

            let valueToRemove;

            if (num === 1) {
                syncAndClean(maxHeap, counts);
                
                if (maxHeap.size() > 0) {
                    valueToRemove = maxHeap.pop();
                }
            } else if (num === -1) {
                syncAndClean(minHeap, counts);
                
                if (minHeap.size() > 0) {
                    valueToRemove = minHeap.pop();
                }
            }

            if (valueToRemove !== undefined) {
                counts.set(valueToRemove, counts.get(valueToRemove) - 1);
                size--;
            }
        }
    }

    if (size === 0) {
        return [0, 0];
    }
    
    syncAndClean(maxHeap, counts);
    syncAndClean(minHeap, counts);

    return [maxHeap.peek(), minHeap.peek()];
}
