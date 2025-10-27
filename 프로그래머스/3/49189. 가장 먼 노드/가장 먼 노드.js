/**
* 문제 해결 시나리오
* - 최소 힙 + dijkstra 알고리즘을 활용
*/
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
    
    push(arr) {
        this.heap.push(arr);
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
    
    heapifyUp() {
        let idx = this.heap.length - 1;
        
        while(idx > 0) {
            const parent = this.getParentIndex(idx);
            if(this.heap[parent][0] <= this.heap[idx][0]) break;
            this.swap(idx, parent);
            idx = parent;
        }
    }
    
    heapifyDown() {
        const length = this.heap.length;
        let idx = 0;
        
        while(this.getLeftChildIndex(idx) < length) {
            const left = this.getLeftChildIndex(idx);
            const right = this.getRightChildIndex(idx);
            
            let smaller = left;
            
            if(right < length && this.heap[right][0] < this.heap[left][0]) {
                smaller = right;
            }
            
            if(this.heap[idx][0] <= this.heap[smaller][0]) break;
            
            this.swap(idx, smaller);
            idx = smaller;
        }
    }
}

const solution = (n, vertex) => {
    const dist = Array(n + 1).fill(Infinity);
    const graph = Array.from({length: n + 1}, () => []);
    const minHeap = new MinHeap();
    
    for(const [a, b] of vertex) {
        graph[a].push([b, 1]);
        graph[b].push([a, 1]);
    }
    
    dist[1] = 0;
    minHeap.push([0, 1]);
    
    let maxDist = Number.MIN_SAFE_INTEGER;
    
    while(minHeap.size()) {
        const [currentDist, currentNode] = minHeap.pop();
        
        if(dist[currentNode] < currentDist) continue;
        
        for(const [nextNode, nextDist] of graph[currentNode]) {
            const newDist = currentDist + nextDist;
            
            if(newDist < dist[nextNode]) {
                maxDist = Math.max(maxDist, newDist);
                dist[nextNode] = newDist;
                minHeap.push([newDist, nextNode]);
            }
        }
    }
    
    return dist.filter(v => v === maxDist).length;
}
