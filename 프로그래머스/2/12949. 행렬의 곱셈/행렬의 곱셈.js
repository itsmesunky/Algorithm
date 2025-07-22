const solution = (arr1, arr2) => {
    // 결과를 저장할 2차원 배열의 행과 열
    const row = arr1.length;
    const column = arr2[0].length;
    
    const answer = Array.from({length: row}, () => Array(column).fill(0));
    
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < column; j++) {
            let result = 0;
            
            for(let k = 0; k < arr2.length; k++) {
                result += arr1[i][k] * arr2[k][j];
            }
            
            answer[i][j] = result;
        }
    }
    
    return answer;
}