const solution = (arr) => {
    let i = 0;
    let stk = [];
    
    while(i < arr.length) {
        if(!stk.length) {
            stk.push(arr[i++]);
        } else {
            if(stk[stk.length - 1] === arr[i]) {
                stk.pop();
                i++;
            } else {
                stk.push(arr[i++]);
            }
        }
    }
    
    return stk.length === 0 ? [-1] : stk;
    
}