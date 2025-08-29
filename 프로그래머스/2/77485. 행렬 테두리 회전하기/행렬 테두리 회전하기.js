/**
* 문제 해결 시나리오
* 1. queries 배열을 순회하며 시작점에서 도착점까지 시계방향으로 한칸씩 밀기
*/
const solution = (rows, columns, queries) => {
    const answer = [];
    
    const board = Array.from({length: rows + 1}, () => Array(columns + 1).fill(0));
    
    // 격자판 1 ~ n까지 채우기
    let number = 1;
    for(let row = 1; row <= rows; row++) {
        for(let col = 1; col <= columns; col++) {
            board[row][col] = number++;
        }
    }
    
    // 시계 방향 정의
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];
    
    for(const query of queries) {
        // 출발행, 출발열, 도착행, 도착열
        const [sRow, sCol, eRow, eCol] = query;
        
        // 현재 위치
        const pos = [sRow, sCol];
        
        // 현재 위치의 원소 값
        let curr = board[pos[0]][pos[1]];
        
        // query마다의 최소값
        let min = curr;
        
        for(let i = 0; i < 4; i++) {
            let count = 0;
            
            // 이동 횟수 정하기
            const moves = i % 2 ? eRow - sRow : eCol - sCol;
                  
            while(count < moves) {
                // 다음 위치로 이동
                pos[0] += dx[i];
                pos[1] += dy[i];
                
                // 다음 위치의 원소 값
                const next = board[pos[0]][pos[1]];
                min = Math.min(next, min);
                
                // 다음 위치에 현재 위치 원소 넣기
                board[pos[0]][pos[1]] = curr;
                
                curr = next;
                
                count++;
            }
        }
        
        answer.push(min);
    }
    
    return answer;
}