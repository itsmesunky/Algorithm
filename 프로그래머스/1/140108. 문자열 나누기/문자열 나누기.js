const solution = (s) => {
    let result = x = pos = xCount = notXCount = curIndex = 0;
    let charArr = [...s];
    
    while(pos < s.length) {
        x = charArr[0];
        let nextChar = charArr[curIndex];
        
        if(x === nextChar) {
            xCount++;
        } else {
            notXCount++;
        }
        
        pos++;
        curIndex++;
        
        if(xCount === notXCount) {
            charArr.splice(0, curIndex);
            curIndex = xCount = notXCount = 0;
            result++;
        }
    }
    
    
    return (charArr.length > 0 ? 1 : 0) + result;
}