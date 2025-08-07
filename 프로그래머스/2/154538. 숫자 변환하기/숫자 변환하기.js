const solution = (x, y, n) => {
    if(x === y) return 0; // x와 y가 같은 경우 0 반환
    
    const dfs = () => {
        // 특정 노드 방문 여부를 저장하기 위한 배열
        const visited = Array(y).fill(false);
        // 연산 횟수
        let count = 0;
        // BFS 알고리즘을 적용하기 위해 queue 자료구조 사용
        const queue = [x];
        // queue에서 노드를 가리킬 변수
        let idx = 0;
        
        while(queue.length) {
            // 연산 횟수 증가
            count++;
            
            const len = queue.length;
            
            for(let i = idx; i < len; i++) {
                const node = queue[idx++];
                
                // 방문하지 않은 노드라면
                if(!visited[node]) {
                    visited[node] = true;
                    
                    const nums = [node + n, node * 2, node * 3];
                    
                    if(nums.some(v => v === y)) return count;
                    
                    // 모든 수들이 y보다 클 때 다음 노드에 대해 연산 실행
                    if(nums.every(v => v > y)) return -1;
                    
                    queue.push(...nums.filter(v => v < y));
                }
            }
        }
    }
    
    return dfs();
}