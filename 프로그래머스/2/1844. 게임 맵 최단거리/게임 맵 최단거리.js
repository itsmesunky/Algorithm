/**
* 최단 거리 탐색을 위해 BFS(너비 우선 탐색) 알고리즘 적용
*/
const solution = (maps) => {
    const n = maps.length; // 행의 크기
    const m = maps[0].length; // 열의 크기
    
    // 델타 탐색을 위한 동서남북 정의
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    
    const queue = []; // 노드를 저장할 Queue
    
    const bfs = (map) => {
        // 행, 열, 시작점으로부터 거리
        queue.push([0, 0, 0]);
        
        // 시작점 방문 처리
        map[0][0] = 0;
        
        while(queue.length) {
            const [row, column, distance] = queue.shift();
            
            // 동서남북 탐색
            for(let i = 0; i < 4; i++) {
                const nx = column + dx[i];
                const ny = row + dy[i];
                const newDistance = distance + 1;
                
                // maps 영역을 벗어났을 때 다음 방향 탐색
                if(nx < 0 || ny < 0 || nx >= m || ny >= n) {
                    continue;
                }
                
                // 해당 방향 탐색 가능하면 queue에 추가
                if(map[ny][nx] !== 0) {
                    queue.push([ny, nx, newDistance]);
                    map[ny][nx] = 0;
                }
                
                if(nx === m - 1 && ny === n - 1) {
                    return newDistance + 1;
                }
            }
        }
        
        return -1;
    }
    
    return bfs(maps);
}