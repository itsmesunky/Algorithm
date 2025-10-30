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
    const length = jobs.length;
    
    // jobs 요청 시각 기준 오름차순 정렬
    jobs.sort((a, b) => a[0] - b[0]);
    
    let idx = 0;                // jobs 배열 포인터
    let totalTakesTimes = 0;    // 현재까지 흐른 시간
    let totalReturnTimes = 0;   // 누적 반환 시간
    
    // 대기 큐
    const pq = new MinHeap();
    
    while(idx < length || pq.size()) {
        // 🔥 다른 작업 진행 중, 요청이 들어온 작업들을 큐에 삽입
        while(idx < length && jobs[idx][0] <= totalTakesTimes) {
            pq.push(jobs[idx]);
            idx++;
        }
        
        if(pq.size()) { // 대기 큐에 작업이 있는 경우
            const [req, duration] = pq.pop();           // 큐에서 작업을 꺼내서 실행
            totalTakesTimes += duration;                // 현재까지 흐른 시간 누적
            totalReturnTimes += totalTakesTimes - req   // 반환시간 누적
        } else {
            totalTakesTimes = jobs[idx][0];
        }
    }
    
    
    return Math.floor(totalReturnTimes / length);
}