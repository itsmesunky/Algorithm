const solution = (arr) => {
    // [0의 개수, 1의 개수]
    const answer = [0, 0];
    
    /**
    * @param(startRow): 시작행
    * @param(startCol): 시작열
    * @param(len): 길이
    */
    const quad = (startRow, startCol, len) => {
        // 길이가 1인 경우
        if(len === 1) {
            answer[arr[startRow][startCol]]++;
            return;
        }
        
        // 시작 위치의 값
        const firstValue = arr[startRow][startCol];
        
        // 해당 영역의 값이 모두 같은지 여부
        let isSame = true;
        
        for(let i = startRow; i < startRow + len; i++) {
            for(let j = startCol; j < startCol + len; j++) {
                // 값이 같지 않다면 반복문 종료
                if(firstValue !== arr[i][j]) {
                    isSame = false;
                    break;
                }
            }
            
            if(!isSame) {
                break;
            }
        }
        
        // 값이 모두 같다면 재귀 처리 X
        if(isSame) {
            answer[firstValue]++;
            return;
        }
        
        const newLen = len / 2;
        
        quad(startRow, startCol, newLen);
        // 우
        quad(startRow, startCol + newLen, newLen);
        // 하
        quad(startRow + newLen, startCol, newLen);
        // 우하
        quad(startRow + newLen, startCol + newLen, newLen);
    }
    
    // 0행 0열부터 시작
    quad(0, 0, arr.length);
    
    return answer;
}