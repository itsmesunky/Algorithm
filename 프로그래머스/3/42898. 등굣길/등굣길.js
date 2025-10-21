const solution = (m, n, puddles) => {
    const MOD = 1_000_000_007;
    
    const R = n + 1;
    const C = m + 1;
    
    const dp = Array.from({length: R}, () => Array(C).fill(0));
    
    for(const [c, r] of puddles) {
        dp[r][c] = -1;
    }
    
    dp[1][1] = 1;
    
    for(let row = 1; row < R; row++) {
        for(let col = 1; col < C; col++) {
            if(row === 1 && col ===1) continue;
            if(dp[row][col] === -1) continue;
            
            let fromUp = 0;
            if(row > 1) {
                const topValue = dp[row-1][col];
                if(topValue !== -1) fromUp = topValue;
            }
            
            let fromLeft = 0;
            if(col > 1) {
                const leftValue = dp[row][col-1];
                if(leftValue !== -1) fromLeft = leftValue;
            }
            
            dp[row][col] = (fromUp + fromLeft) % MOD;
        }
    }
    
    return dp[n][m];
}