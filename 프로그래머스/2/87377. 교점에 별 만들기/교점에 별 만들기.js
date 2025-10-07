/**
* 문제 해결 시나리오
* 1. 두 직선 간 교점은 유일함
* 2. 직선끼리의 교점 좌표(x, y 모두 정수)를 모두 구한 뒤, 최소/최대 정수값으로 2차원 배열을 생성
* 3. 교점에 '*' 표시
*/
const solution = (line) => {
    // 교점 좌표 저장 배열
    const points = [];
    
    // 두 직선 간 교점 구하기
    for(let curr = 0; curr < line.length - 1; curr++) {
        // 현재 직선
        const [A, B, E] = line[curr];
        
        for(let rest = curr + 1; rest < line.length; rest++) {
            const [C, D, F] = line[rest];
            
            // 분모
            const denominator = (A * D) - (B * C);
            
            // 두 직선이 평행하거나 일치하는 경우
            if(!denominator) continue;
            
            // x, y 좌표의 분자
            const xNumerator = (B * F) - (E * D);
            const yNumerator = (E * C) - (A * F);
            
            // 좌표 정수 판별
            if(xNumerator % denominator === 0 && yNumerator % denominator === 0) {
                const x = xNumerator / denominator;
                const y = yNumerator / denominator;
                
                points.push([x, y]);
            }
        }
    }
    
    // 최소/최대값 찾기
    let minX = points[0][0], maxX = points[0][0];
    let minY = points[0][1], maxY = points[0][1];
    
    for(const [x, y] of points) {
        minX = Math.min(minX, x);
        maxX = Math.max(maxX, x);
        minY = Math.min(minY, y);
        maxY = Math.max(maxY, y);
    }
    
    // 2차원 배열 생성 및 교점에 별 그리기
    const R = maxY - minY + 1;
    const C = maxX - minX + 1;
    const board = Array.from({length: R}, () => Array(C).fill('.'));
    points.forEach(([x, y]) => {
        const row = maxY - y;
        const col = x - minX;
        board[row][col] = '*';
    });
    
    return board.map(arr => arr.join(''));
}