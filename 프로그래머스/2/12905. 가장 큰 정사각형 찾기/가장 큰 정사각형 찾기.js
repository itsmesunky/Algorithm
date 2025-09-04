function solution(board) {
    const rows = board.length;
    const cols = board[0].length;
    let maxSide = 0;

    // 1x1 크기 보드인 경우
    if (rows < 2 || cols < 2) {
        // 보드에 1이 하나라도 있으면 1, 없으면 0 반환
        return board.some(row => row.includes(1)) ? 1 : 0;
    }

    const dp = Array.from({ length: rows }, () => Array(cols).fill(0));

    // 첫 행과 열은 그대로 복사
    for (let i = 0; i < rows; i++) {
        dp[i][0] = board[i][0];
        if (dp[i][0] === 1) maxSide = 1;
    }
    for (let j = 0; j < cols; j++) {
        dp[0][j] = board[0][j];
        if (dp[0][j] === 1) maxSide = 1;
    }

    // DP 점화식 적용
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (board[i][j] === 1) {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
                if (dp[i][j] > maxSide) {
                    maxSide = dp[i][j];
                }
            }
        }
    }

    return maxSide * maxSide;
}