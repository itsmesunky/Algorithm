/**
* 문제 해결 시나리오
* 1. requests를 순회하며 지게차/크레인 사용 구분
* 2. 지게차를 사용하는 경우 접근 가능한 컨테이너 확인 후 출고
* 3. 크레인을 사용하는 경우, 해당 문자 컨테이너 모두 출고
*/
const solution = (storage, requests) => {
    const R = storage.length;
    const C = storage[0].length;
    
    const arr = storage.map(str => str.split(''));
    
    /**
    * isApproachable: 지게차 사용 시, 해당 컨테이너 접근 가능 여부 판별 함수(BFS)
    * @param(row): 해당 컨테이너 위치행
    * @param(col): 해당 컨테이너 위치열
    */
    const isApproachable = (row, col) => {
        const visited = Array.from({length: R}, () => Array(C).fill(false));
        const queue = [[row, col]];
        visited[row][col] = true;
        
        while(queue.length) {
            const [currR, currC] = queue.shift();
            
            if(currR === 0 || currR === R - 1 || currC === 0 || currC === C - 1) {
                return true;
            }
            
            const dx = [-1, 1, 0, 0];
            const dy = [0, 0, -1, 1];
            
            for(let i = 0; i < 4; i++) {
                const nx = currR + dx[i];
                const ny = currC + dy[i];
                
                // 방문하지 않았고, 빈 문자열인 경우
                if(!visited[nx][ny] && !arr[nx][ny]) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny]);
                }
            }
        }
        
        return false;
    }
    
    /**
    * replaceToEmpty: 2차원 배열 내 특정 문자를 빈 문자로 변경해주는 함수
    * @param(arr): 2차원 배열
    * @param(char): 특정 문자
    */
    const replaceToEmpty = (arr, char) => {
        arr.forEach((row, i) => row.forEach((col, j) => {
                if(col === char) {
                    arr[i][j] = '';
                }
        }))
    }
    
    for(const request of requests) {
        const char = request[0];
        const len = request.length;
        
        if(len === 1) { // 지게차 사용
            for(let row = 0; row < R; row++) {
                for(let col = 0; col < C; col++) {
                    if(arr[row][col] === char && isApproachable(row, col)) {
                        arr[row][col] = 'x';
                    }
                }
            }
            replaceToEmpty(arr, 'x');
        } else { // 크레인 사용
            replaceToEmpty(arr, char);
        }
    }
    
    return arr.flat().filter(char => char).length;
}
