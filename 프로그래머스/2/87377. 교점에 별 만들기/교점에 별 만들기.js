/**
* 문제 해결 시나리오
* 1. line 배열을 순회하며 현재 원소와 나머지 원소들의 교점을 찾음(문제 내 공식 활용)
* 2. 교점의 좌표 x와 y가 정수이면 배열에 저장
* 3. x와 y의 최소/최대값을 찾아 격자판을 만들고, 교점인 지점에 '*' 찍기
*/
const solution = (line) => {
    // 교점 좌표를 저장할 배열
    const points = [];
    
    for(let curr = 0; curr < line.length - 1; curr++) {
        const [A, B, E] = line[curr];
        // 현재 원소와 나머지 원소들의 교점 찾기
        for(let rest = curr + 1; rest < line.length; rest++) {
            const [C, D, F] = line[rest];
            
            // 분모
            const denominator = (A * D) - (B * C);
            
            // AD - BC = 0인 경우 두 직선은 평행 또는 일치
            if(!denominator) continue;
            
            // 분자
            const xMolecule = (B * F) - (E * D);
            const yMolecule = (E * C) - (A * F);
            
            // x와 y가 정수가 되는지 판별
            // xMolecule, yMolecule 둘 다 denominator로 나누어 떨어져야 함
            if(!(xMolecule % denominator) && !(yMolecule % denominator)) {
                const x = xMolecule / denominator;
                const y = yMolecule / denominator;
                points.push([x, y]);
            }
        }
    }
    
    // x축 최소/최대값 찾기
    points.sort((a, b) => a[0] - b[0]);
    const [minX, maxX] = [points[0][0], points.at(-1)[0]];
    
    // y축 최소/최대값 찾기
    points.sort((a, b) => a[1] - b[1]);
    const [minY, maxY] = [points[0][1], points.at(-1)[1]];
    
    const C = maxX - minX + 1;
    const R = maxY - minY + 1;
    
    const board = Array.from({length: R}, () => Array(C).fill('.'));
    
    // board에서 교점에 별 찍기
    for(const [x, y] of points) {
        const col = x - minX;
        const row = maxY - y;
        
        board[row][col] = '*';
    }
    
    return board.map(arr => arr.join(''));
}