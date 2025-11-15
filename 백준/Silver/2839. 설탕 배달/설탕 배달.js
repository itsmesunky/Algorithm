const input = +require("fs").readFileSync("/dev/stdin").toString().trim();

const dp = Array(input + 1).fill(-1);
dp[3] = 1;
dp[5] = 1;

for(let i = 6; i <= input; i++) {
    const a = dp[i - 3] + 1;
    const b = dp[i - 5] + 1;
    
    if(!a && !b) {
        dp[i] = -1;
    } else if(!a || !b) {
        dp[i] = Math.max(a, b);
    } else {
        dp[i] = Math.min(a, b);
    }
}

console.log(dp[input]);