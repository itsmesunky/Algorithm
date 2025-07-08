const solution = (n, w, num) => {
    let answer = 0;
    
    // 꺼내야 하는 박스가 존재하는 행
    const targetRow = Math.ceil(num / w);
    // 전체 행
    const totalRow = Math.ceil(n / w);
    // 꺼내야 하는 박스 인덱스(기준: 왼 → 오)
    const idxFromLeftToRight = (num - 1) % w;
    // 실제 인덱스
    let actualIdx;
    
    if(targetRow % 2 !== 0) { // 꺼내야 하는 박스가 홀수층에 있는 경우
        actualIdx = idxFromLeftToRight;
    } else { // 꺼내야 하는 박스가 짝수층에 있는 경우
        actualIdx = w - 1 - idxFromLeftToRight;
    }
    
    // 꺼내야 하는 박스가 존재하는 행부터 전체 행까지 반복
    for(let row = targetRow; row <= totalRow; row++) {
        // 해당 행의 시작 번호
        const startInRow = (row - 1) * w + 1;
        // 해당 행의 마지막 번호
        const endInRow = Math.min(n, row * w);
        
        // 꺼내야 하는 박스와 동일한 열에 있는 박스
        let actualIdxBox;
        
        if(row % 2 !== 0) { // 홀수층인 경우
            actualIdxBox = startInRow + actualIdx;
        } else { // 짝수층인 경우
            actualIdxBox = w - 1 - actualIdx + startInRow;
        }
        
        if(startInRow <= actualIdxBox && actualIdxBox <= endInRow && actualIdxBox <= n) {
            answer++;
        }
    }
    
    return answer;
}