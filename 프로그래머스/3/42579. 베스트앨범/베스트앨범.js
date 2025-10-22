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
    
    size() {
        return this.heap.length;
    }
    
    pop() {
        if(this.heap.length === 0) return false;
        if(this.heap.length === 1) return this.heap.pop();
        
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return root;
    }
    
    push(arr) {
        this.heap.push(arr);
        this.heapifyUp();
    }
    
    heapifyUp() {
        let index = this.heap.length - 1;
        
        while(index > 0) {
            const parent = this.getParentIndex(index);
            
            // 재생 수 비교
            if(this.heap[index][1] < this.heap[parent][1]) break;
            
            // 재생수가 같은 경우 고유 번호 비교
            if(this.heap[index][1] === this.heap[parent][1]
               && this.heap[parent][0] < this.heap[index][0]) break;
            
            this.swap(index, parent);
            index = parent;
        }
    }
    
    heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        
        while(this.getLeftChildIndex(index) < length) {
            const left = this.getLeftChildIndex(index);
            const right = this.getRightChildIndex(index);
            
            let largger = left;
            
            if(right < length && this.heap[left][1] < this.heap[right][1]) {
                largger = right;
            }
            
            if(this.heap[largger][1] < this.heap[index][1]) break;
            
            // 재생 수가 같은 경우 고유번호로 비교
            if(this.heap[largger][1] === this.heap[index[1]] 
               && this.heap[index][0] < this.heap[largger][0]) break;
            
            this.swap(index, largger);
            index = largger;
        }
    }
}

const solution = (genres, plays) => {
    const answer = [];
    const obj = {};
    
    genres.forEach((genre, i) => {
        const key = genre;
        const play = plays[i];
        
        if(!obj[key]){
            obj[key] = {
                totalPlays: 0,
                songs: new MaxHeap()
            };
        }
        
        obj[key].totalPlays += play;
        obj[key].songs.push([i, play]);
    })
    
    const values = Object.values(obj).sort((a, b) => b.totalPlays - a.totalPlays);
    
    for(const object of values) {
        const heap = object.songs;
        
        if(heap.size() === 1) {
            answer.push(heap.pop()[0]);
            continue;
        }
        
        answer.push(heap.pop()[0]);
        answer.push(heap.pop()[0]);
    }
    
    return answer;
}
