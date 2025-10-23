const solution = (money) => {
    const n = money.length;
    
    const getLinearMax = (arr) => {
        const length = arr.length;
        if(length === 2) return Math.max(...arr);
        
        let prev2 = arr[0];
        let prev1 = Math.max(arr[0], arr[1]);
        
        for(let i = 2; i < length; i++) {
            const curr = Math.max(prev2 + arr[i], prev1);
            
            prev2 = prev1;
            prev1 = curr;
        }
        
        return prev1;
    }
    
    const case1 = getLinearMax(money.slice(0, n - 1));
    const case2 = getLinearMax(money.slice(1));
    
    return Math.max(case1, case2);
}