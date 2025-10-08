const solution = (n) => {
    // n이 홀수인 경우, 2 x 1의 타일로 바닥을 가득 채울 수 없음
    if(n % 2) return 0;
    
    const MOD = 1_000_000_007;
    
    const dp = Array(n + 1).fill(0);
    dp[0] = 1;
    dp[2] = 3;
    
    for(let i = 4; i <= n; i += 2) {
        dp[i] = (dp[i - 2] * 4 % MOD - dp[i - 4] + MOD) % MOD;
    }
    
    return dp[n];
}