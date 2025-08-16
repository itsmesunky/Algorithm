const solution = (n) => {
    const result = Array.from({length: n}, (_, i) => Array(i + 1).fill(0));
    
    let row = -1, col = 0, num = 0;
    
    for(let i = 0; i < n; i++) {
        for(let j = i; j < n; j++) {
            num++;
            
            if(i % 3 === 0) { // 아래로 이동
                row++;
            } else if(i % 3 === 1) { // 오른쪽으로 이동
                col++;
            } else { // 위로 이동
                row--;
                col--;
            }
            
            result[row][col] = num;
        }
    }
    
    return result.flat();
    
}