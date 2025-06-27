const solution = (X, Y) => {
    const xArr = Array(10).fill(0);
    const yArr = Array(10).fill(0);
    
    for(let i = 0; i < X.length; i++) {
        xArr[X[i]]++;
    }
    
    for(let i = 0; i < Y.length; i++) {
        yArr[Y[i]]++;
    }
    
    let answer = "";
    
    for(let i = 9; i >= 0; i--) {
        while(xArr[i] > 0 && yArr[i] > 0) {
            answer += i;
            xArr[i]--;
            yArr[i]--;
        }
    }
    
    return answer ? (+answer > 0 ? answer : "0") : "-1";
    
}