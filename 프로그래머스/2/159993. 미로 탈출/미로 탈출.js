// 4방향 좌표 반환 함수
const getPos = (maps, row, col, currRow, currCol) => {
    const pos = [];
    
    // 상/하/좌/우
    const dy = [-1, 1, 0, 0];
    const dx = [0, 0, -1, 1];
    
    for(let i = 0; i < 4; i++) {
        const ny = currRow + dy[i];
        const nx = currCol + dx[i];
        
        if(!(ny < 0 || ny >= row || nx < 0 || nx >= col) && maps[ny][nx] !== 'X') {
            pos.push([ny, nx]);
        }
    }
    
    return pos;
}

// 특정 문자를 찾기 위한 BFS
const findChar = (maps, char, row, col, currRow, currCol, time) => {
    const visited = Array.from({length: row}, () => Array(col).fill(false));
    // 해당 노드 방문 처리
    visited[currRow][currCol] = true;
    
    const queue = [];
    queue.push([currRow, currCol, time]);
    
    while(queue.length) {
        const [prevRow, prevCol, prevTime] = queue.shift();
        
        if(maps[prevRow][prevCol] === char) {
            return [prevRow, prevCol, prevTime];
        }
        
        // 인접한 노드들
        const nodes = getPos(maps, row, col, prevRow, prevCol);
        
        for(const [nextRow, nextCol] of nodes) {
            if(!visited[nextRow][nextCol]) {
                visited[nextRow][nextCol] = true;
                queue.push([nextRow, nextCol, prevTime + 1])
            }
        }
    }

    return [];
}

const solution = (maps) => {
    // 행, 열
    const [row, col] = [maps.length, maps[0].length];
    
    // 시작위치 정의
    const startRow = maps.findIndex(str => str.includes('S'));
    const startCol = maps[startRow].indexOf('S');
    
    const [restartRow, restartCol, times] = findChar(maps, 'L', row, col, startRow, startCol, 0);
    
    if(restartRow !== undefined) {
        const [endRow, endCol, result] = findChar(maps, 'E', row, col, restartRow, restartCol, times);
        
        if(result) {
            return result;
        }
    }
    
    return -1;
}