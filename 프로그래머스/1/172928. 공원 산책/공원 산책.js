const solution = (park, routes) => {
    // 각 문자에 방향 저장
    const dir = {
        N: [-1, 0], // 위
        S: [1, 0],  // 아래
        W: [0, -1], // 좌
        E: [0, 1]   // 우
    }
    
    // 현재 위치 저장할 변수
    let [posY, posX] = [0, 0];
    
    loop1: for(let i = 0; i < park.length; i++) {
        for(let j = 0; j < park[i].length; j++) {
            if(park[i][j] === 'S') {
                // 시작 위치 저장
                [posY, posX] = [i, j];
                break loop1;
            }
        }
    }
    
    for(const route of routes) {
        let [op, n] = route.split(" ");
        let count = 0;
        
        // 이동할 위치
        let [my, mx] = [posY, posX];
        while(count < n) {
            my += dir[op][0];
            mx += dir[op][1];
            
            // 좌표를 벗어났거나 장애물을 만났을 때 반복문 종료
            if(!park[my] || !park[my][mx] || park[my][mx] === 'X') {
                break;
            }
            
            count++;
        }
        
        if(count === +n) [posY, posX] = [my, mx];
    }
    
    return [posY, posX];
}