const solution = (t, p) => {
    let i = 1;
    let result = 0;
    let newT = t;
    
    while(true) {
        if(newT.length < p.length) break;
        let str = newT.slice(0, p.length);
        if(+str <= +p) result++;
        newT = t.slice(i++);
    }
    
    return result;
}