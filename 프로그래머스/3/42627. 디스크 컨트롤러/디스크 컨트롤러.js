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
        if(this.heap.length === 0) return null;
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
            
            if(this.heap[idx][1] < this.heap[parent][1]) {
                this.swap(idx, parent);
                idx = parent;
            } else {
                break;
            }
        }
    }
    
    heapifyDown() {
        const len = this.heap.length;
        let idx = 0;
        
        while(this.getLeftChildIndex(idx) < len) {
            const left = this.getLeftChildIndex(idx);
            const right = this.getRightChildIndex(idx);
            
            let smaller = left;
            
            if(right < len && this.heap[right][1] < this.heap[left][1]) {
                smaller = right;
            }
            
            if(this.heap[smaller][1] < this.heap[idx][1]) {
                this.swap(idx, smaller);
                idx = smaller;
            } else {
                break;
            }
        }
    }
}

const solution = (jobs) => {
    const L = jobs.length;
    
    jobs.sort((a, b) => a[0] - b[0]);
    
    let totalReturnTimes = 0; // 누적 응답 시간 (완료 시간 - 요청 시간)
    let currentTime = 0;      // 현재까지 흐른 시간 (디스크가 현재 시각)
    let jobIndex = 0;         // jobs 배열에서 다음에 힙에 넣을 작업 인덱스
    let jobsDone = 0;         // 완료된 작업 수
    
    const pq = new MinHeap(); // 소요 시간 기준으로 정렬되는 최소 힙 (Priority Queue)
    
    while (jobsDone < L) {
        while (jobIndex < L && jobs[jobIndex][0] <= currentTime) {
            pq.push(jobs[jobIndex]);
            jobIndex++;
        }
        
        if (pq.size() > 0) {
            const [reqTimes, takeTimes] = pq.pop();
            
            currentTime += takeTimes;
            
            totalReturnTimes += (currentTime - reqTimes);
            jobsDone++;
            
        } else {
            if (jobIndex < L) {
                currentTime = jobs[jobIndex][0];
            } 
        }
    }
    
    return Math.floor(totalReturnTimes / L);
}