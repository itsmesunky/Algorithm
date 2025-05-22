const solution = (t, p) => {
    let result = 0;
    
    for(let i = 0; i <= t.length - p.length; i++) {
        const subStr = t.slice(i, i + p.length);
        if(+subStr <= +p) result++;
    }
    
    return result;
}