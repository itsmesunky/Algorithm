const solution = (s) => {
    let result = 0;
    let same = diff = 0;
    let x = s[0];
    
    [...s].forEach((char, i) => {
        x === s[i] ? same++ : diff++;
       
        if(same === diff) {
            x = s[i+1];
            same = diff = 0;
            result++;
        }
    });
    
    return (same !== diff ? 1 : 0) + result;
}