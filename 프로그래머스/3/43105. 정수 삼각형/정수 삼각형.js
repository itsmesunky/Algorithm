const solution = (triangle) => {
    const len = triangle.length;
    const dp = [...triangle];
    
    for(let currLevel = len - 2; currLevel >= 0; currLevel--) {
        const nextLevel = currLevel + 1;
        
        for(let idx = 0; idx < triangle[currLevel].length; idx++) {
            const num1 = triangle[nextLevel][idx];
            const num2 = triangle[nextLevel][idx + 1];
            
            dp[currLevel][idx] += Math.max(num1, num2);
        }
    }
    
    return dp[0][0];
}