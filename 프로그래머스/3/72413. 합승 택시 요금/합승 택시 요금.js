class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }
    
    getLeftChildIndex(i) {
        return i * 2 + 1;
    }
    
    getRightChildIndex(i) {
        return i * 2 + 2;
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
        if(this.heap.length === 0) return undefined;
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
            if(this.heap[parent][1] <= this.heap[idx][1]) break;
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
            
            if(right < length && this.heap[right][1] < this.heap[left][1]) {
                smaller = right;
            }
            
            if(this.heap[idx][1] <= this.heap[smaller][1]) break;
            this.swap(idx, smaller);
            idx = smaller;
        }
    }
}

const dijkstra = (start, graph, n) => {
    const pq = new MinHeap();
    pq.push([start, 0]);
    
    const dist = Array(n + 1).fill(Infinity);
    dist[start] = 0;
    
    while(pq.size()) {
        const [currNode, currDist] = pq.pop();
        if(dist[currNode] < currDist) continue;
        
        for(const [nextNode, nextDist] of graph[currNode]) {
            const newDist = currDist + nextDist;
            if(newDist < dist[nextNode]) {
                pq.push([nextNode, newDist]);
                dist[nextNode] = newDist;
            }
        }
    }
    
    return dist;
}

const solution = (n, s, a, b, fares) => {
    const graph = Array.from({ length: n + 1}, () => []);
    
    for(const [start, end, cost] of fares) {
        graph[start].push([end, cost]);
        graph[end].push([start, cost]);
    }
    
    const dijkstraS = dijkstra(s, graph, n);
    const dijkstraA = dijkstra(a, graph, n);
    const dijkstraB = dijkstra(b, graph, n);
    
    let answer = Infinity;
    
    for(let i = 1; i <= n; i++) {
        answer = Math.min(answer, dijkstraS[i] + dijkstraA[i] + dijkstraB[i]);
    }
    
    return answer;
}