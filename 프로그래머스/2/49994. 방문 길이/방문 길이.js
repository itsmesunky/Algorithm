const solution = (dirs) => {
    let answer = 0;
    
    const direction = {
        // [x축, y축]
        'L': [-1, 0],
        'R': [1, 0],
        'U': [0, -1],
        'D': [0, 1]
    }
    
    // 현재 위치
    let [currX, currY] = [0, 0];
    
    // 걸어본 길 저장
    const set = new Set();
    
    for(const dir of dirs) {
        // 이동할 위치
        const nx = currX + direction[dir][0];
        const ny = currY + direction[dir][1];
        
        // 경계 감지
        if(nx < -5 || ny < -5 || nx > 5 || ny > 5) {
            continue;
        }
        
        // 출발 X, 출발 Y => 도착 X, 도착 Y 형태로 저장(양방향)
        let path1 = `${currX}, ${currY} => ${nx}, ${ny}`;
        let path2 = `${nx}, ${ny} => ${currX}, ${currY}`;
        
        if(!set.has(path1)) {
            answer++;
            set.add(path1);
            set.add(path2);
        }
        
        [currX, currY] = [nx, ny];
    }
    
    return answer;
}