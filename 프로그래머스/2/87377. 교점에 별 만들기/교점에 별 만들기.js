function solution(line) {
    // 1. 모든 직선 쌍에 대해 교점을 구하고 정수 교점만 저장
    const points = [];
    const n = line.length;

    for (let i = 0; i < n; i++) {
        const [A, B, E] = line[i];
        for (let j = i + 1; j < n; j++) {
            const [C, D, F] = line[j];

            // 연립방정식의 해 (교점) 공식 적용
            // Ax + By + E = 0, Cx + Dy + F = 0
            // x = (B*F - E*D) / (A*D - B*C)
            // y = (E*C - A*F) / (A*D - B*C)
            
            const denominator = (A * D) - (B * C); // 분모 (AD - BC)

            // 두 직선이 평행하거나 일치하는 경우 (교점이 무수히 많거나 없는 경우) 제외
            if (denominator === 0) continue; 

            const numeratorX = (B * F) - (E * D); // x의 분자 (BF - ED)
            const numeratorY = (E * C) - (A * F); // y의 분자 (EC - AF)

            // 교점 좌표가 정수인지 확인
            if (numeratorX % denominator === 0 && numeratorY % denominator === 0) {
                const x = numeratorX / denominator;
                const y = numeratorY / denominator;
                points.push([x, y]);
            }
        }
    }

    // 2. 정수 교점들의 최소/최대 좌표를 찾아 격자판 크기 결정
    if (points.length === 0) return []; // 교점이 없는 경우 (문제 조건에 따라 별이 1개 이상이지만 안전장치)

    // 초기값 설정: 첫 번째 교점의 좌표로 초기화
    let minX = points[0][0];
    let maxX = points[0][0];
    let minY = points[0][1];
    let maxY = points[0][1];

    for (const [x, y] of points) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
    }

    // 3. 격자판(board) 생성 및 초기화
    const width = maxX - minX + 1;
    const height = maxY - minY + 1;
    
    // '.'으로 채워진 2차원 배열 생성 (height 행, width 열)
    const board = Array.from({ length: height }, () => Array(width).fill('.'));

    // 4. 교점의 위치에 별(*) 표시
    for (const [x, y] of points) {
        // 실제 좌표 (x, y)를 board의 배열 인덱스로 변환
        // X축 변환: x - minX (가장 작은 x좌표를 0으로)
        const boardX = x - minX;
        
        // Y축 변환: maxY - y (가장 큰 y좌표를 0으로)
        // 수학적 좌표계(y가 위로 갈수록 증가)를 배열 인덱스(인덱스가 증가할수록 아래로)로 변환
        const boardY = maxY - y; 
        
        board[boardY][boardX] = '*';
    }

    // 5. 격자판을 문자열 배열로 변환하여 반환
    return board.map(row => row.join(''));
}