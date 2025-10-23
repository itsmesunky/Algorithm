const solution = (sticker) => {
    const length = sticker.length;
    
    if(sticker.length === 1) return sticker[0];
    if(sticker.length === 2) return Math.max(...sticker);
    
    const getLinearMax = (arr) => {
        const len = arr.length;
        if(len === 2) return Math.max(...arr);
        
        let prev2 = arr[0];
        let prev1 = Math.max(arr[0], arr[1]);
        
        for(let i = 2 ; i < len; i++) {
            const curr = Math.max(prev2 + arr[i], prev1);
            
            prev2 = prev1;
            prev1 = curr;
        }
        
        return prev1;
    }
    
    const case1 = getLinearMax(sticker.slice(0, length - 1));
    const case2 = getLinearMax(sticker.slice(1));
    
    return Math.max(case1, case2);
}