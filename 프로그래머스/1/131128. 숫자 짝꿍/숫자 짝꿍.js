const solution = (X, Y) => {
    const xArr = Array(10).fill(0);
    const yArr = Array(10).fill(0);
    
    for(let i = 0; i < X.length; i++) {
        xArr[Number(X[i])]++;
    }
    
    for(let i = 0; i < Y.length; i++) {
        yArr[Number(Y[i])]++;
    }
    
    let answer = "";
    
    for(let i = 9; i >= 0; i--) {
        const commonCount = Math.min(xArr[i], yArr[i]);
        
        answer += i.toString().repeat(commonCount);
    }
    
    if(!answer) {
        return "-1";
    } else if(answer[0] === "0") {
        return "0";
    } else {
        return answer;
    }
}