const solution = (x, y, n) => {
    if(x === y) return 0; // x와 y가 같은 경우 0 반환
    
    const bfs = () => {
        // 특정 노드 방문 여부를 저장하기 위한 배열
        const visited = Array(y).fill(false);
        // 연산 횟수
        let count = 0;
        // BFS 알고리즘을 적용하기 위해 queue 자료구조 사용
        const queue = [x];
        // queue에서 노드를 가리킬 변수
        let idx = 0;
        
        while(queue.length && idx < queue.length) {
            // 연산 횟수 증가
            count++;
            
            const len = queue.length;
            
            for(let i = idx; i < len; i++) {
                const node = queue[idx++];
                
                // 방문하지 않은 노드라면
                if(!visited[node]) {
                    visited[node] = true;
                    
                    const nums = [node + n, node * 2, node * 3];
                    
                    for(const num of nums) {
                        if(num === y) return count;
                        if(num < y && !visited[num]) {
                            queue.push(num);
                        }
                    }
                }
            }
        }
        
        return -1;
    }
    
    return bfs();
}