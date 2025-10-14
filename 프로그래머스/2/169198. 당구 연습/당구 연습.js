const solution = (m, n, startX, startY, balls) => {
    const result = [];
    
    for(const [ballX, ballY] of balls) {
        // 최소 거리
        let minDist = Number.MAX_SAFE_INTEGER;
        
        // 위, 아래, 왼쪽, 오른쪽 기준 목표점 반사 좌표
        const mirrors = [[ballX, 2 * n - ballY], [ballX, -ballY], [-ballX, ballY], [2 * m - ballX, ballY]];
        
        for(const [mirrorX, mirrorY] of mirrors) {
            // X축이 동일할 때
            if(startX === mirrorX) {
                if(startY < ballY && mirrorY > ballY) continue;
                if(startY > ballY && mirrorY < ballY) continue;
            }
            // Y축이 동일할 때
            if(startY === mirrorY) {
                if(startX < ballX && mirrorX > ballX) continue;
                if(startX > ballX && mirrorX < ballX) continue;
            }
            
            // 목표점과 출발점의 유클리드 거리 제곱 값
            const dist = (mirrorX - startX) ** 2 + (mirrorY - startY) ** 2;
            
            minDist = Math.min(minDist, dist);
        }
        
        result.push(minDist);
    }
    
    return result;
}