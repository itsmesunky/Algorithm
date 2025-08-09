function solution(m, n, board) {
    // 문자열 배열을 2차원 배열로 변환
    let newBoard = board.map(row => row.split(''));
    let totalRemoved = 0;

    while (true) {
        let removedCount = 0;
        let removeTargets = []; // 지워질 블록의 좌표를 저장

        // 1. 2x2 블록 찾기
        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                const block = newBoard[i][j];
                if (block === '0') continue; // 이미 지워진 블록은 건너뛰기

                // 2x2 블록이 모두 같은지 확인
                if (
                    block === newBoard[i][j + 1] &&
                    block === newBoard[i + 1][j] &&
                    block === newBoard[i + 1][j + 1]
                ) {
                    removeTargets.push([i, j]);
                }
            }
        }

        // 지울 블록이 없으면 반복문 종료
        if (removeTargets.length === 0) {
            break;
        }

        // 2. 지워질 블록 표시
        for (const [row, col] of removeTargets) {
            if (newBoard[row][col] !== '0') {
                newBoard[row][col] = '0';
                removedCount++;
            }
            if (newBoard[row][col + 1] !== '0') {
                newBoard[row][col + 1] = '0';
                removedCount++;
            }
            if (newBoard[row + 1][col] !== '0') {
                newBoard[row + 1][col] = '0';
                removedCount++;
            }
            if (newBoard[row + 1][col + 1] !== '0') {
                newBoard[row + 1][col + 1] = '0';
                removedCount++;
            }
        }

        totalRemoved += removedCount;

        // 3. 블록 아래로 떨어뜨리기
        for (let j = 0; j < n; j++) { // 열(col) 순회
            for (let i = m - 1; i >= 0; i--) { // 행(row)을 아래부터 위로 순회
                if (newBoard[i][j] === '0') {
                    // 빈 공간을 찾았을 때
                    let k = i - 1;
                    while (k >= 0 && newBoard[k][j] === '0') {
                        k--;
                    }
                    if (k >= 0) {
                        newBoard[i][j] = newBoard[k][j];
                        newBoard[k][j] = '0';
                    }
                }
            }
        }
    }

    return totalRemoved;
}