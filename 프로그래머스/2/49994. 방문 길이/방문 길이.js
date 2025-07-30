const solution = (dirs) => {
    let answer = 0;
    
    const direction = {
        // [행, 열]
        'L': [0, -1],
        'R': [0, 1],
        'U': [-1 ,0],
        'D': [1, 0]
    }

    // 특정 행열 방문 여부 저장
    const visited = Array.from({length: 12}, () => Array.from({length: 12}, () => []));
    
    // 초기 위치: 6행 6열
    let pos = [6, 6];
    
    for(const dir of dirs) {
        let flag = true;
        let [currentY, currentX] = pos;
        
        // 이동할 방향 정의
        const ny = currentY + direction[dir][0];
        const nx = currentX + direction[dir][1];

        // 경계 넘어가면 무시
        if(ny > 11 || nx > 11 || ny < 1 || nx < 1) {
            continue;
        }
        
        // 걸어본 길인지 확인
        for(const [prevY, prevX] of visited[ny][nx]) {
            if(prevY === currentY && prevX === currentX) {
                flag = false;
                break;
            }
        }
        
        pos[0] = ny;
        pos[1] = nx;
        
        if(!flag) continue;
        
        answer++;
        visited[ny][nx].push([currentY, currentX]);
        visited[currentY][currentX].push([ny, nx]);

    }

    return answer;
}