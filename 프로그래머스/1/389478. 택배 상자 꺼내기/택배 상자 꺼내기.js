const solution = (n, w, num) => {
    const arr = Array.from({length: w + 1}, () => []);
    
    // 상자 쌓은 횟수
    let count = 1;
    
    // 방향
    let dir = "right";
    
    // 키
    let key;
    
    // 상자 쌓을 위치
    let idx = 1;
    
    while(count <= n) {
        if(count === num) {
            key = idx;
        }
        
        arr[idx].push(count);
        
        if(dir === 'right') {
            idx++;
        } else {
            idx--;
        }
        
        if(idx < 1) { // 상자 쌓을 위치가 맨 왼쪽인 경우
            idx++;
            dir = "right";
        } else if(idx > w) { // 상자 쌓을 위치가 맨 오른쪽을 벗어난 경우
            idx--;
            dir = "left";
        }
        
        count++;
    }
    
    return arr[key].filter(v => v >= num).length;
}