/**
* 문제 해결 시나리오
* 1. 특정 노드에서 4방향으로 슬라이드
* 2. 'D'를 만나거나 벽에 부딪치는 경우 멈춤
* 3. 도착 지점이 'G'인 경우 count 반환
*/
const solution = (board) => {
    const R = board.length; // 행 크기
    const C = board[0].length; // 열 크기
    
    // 각 노드 방문 여부 저장
    const visited = Array.from({length: R}, () => Array(C).fill(false));
    
    // 시작 노드 찾기
    const sRow = board.findIndex(str => str.includes('R'));
    const sCol = board[sRow].indexOf('R');
    
    // 시작 노드 방문 처리
    visited[sRow][sCol] = true;
    
    // 도착 노드 저장
    const queue = [];
    
    // 큐에 [도착 행, 도착 열, 이동 횟수] 형태로 저장
    queue.push([sRow, sCol, 0]);
    
    while(queue.length) {
        // 출발 노드
        const [startRow, startCol, count] = queue.shift();
        
        if(board[startRow][startCol] === 'G') {
            return count;
        }
        
        // 4방향 정의(상/하/좌/우)
        const dy = [-1, 1, 0, 0];
        const dx = [0, 0, -1, 1];
        
        for(let i = 0; i < 4; i++) {
            let ny = startRow;
            let nx = startCol;
            
            // 가장자리나 'D' 만나기 전까지 직진
            while(ny >= 0 && nx >= 0 && ny < R && nx < C && board[ny][nx] !== 'D') {
                ny += dy[i];
                nx += dx[i];
            }
            
            // 한 칸 뒤로 이동
            ny -= dy[i];
            nx -= dx[i];
            
            // 같은 위치이거나 방문한 노드라면 다음 방향 탐색
            if((startRow === ny && startCol === nx) || visited[ny][nx]) {
                continue;
            }
            
            // 도착 노드 방문 처리
            visited[ny][nx] = true;
            
            // 도착 노드 큐에 저장
            queue.push([ny, nx, count + 1]);
        }
    }
    
    return -1;
}