const solution = (s) => {
    let i =0;
    
    return [...s].reduce((acc, cur) => {
        if(cur === " ") {
            i = 0;
            return acc += " ";
        }
        
        if(i++ % 2 === 0) {
            return acc += cur.toUpperCase();
        } else {
            return acc += cur.toLowerCase();
        }
        
        
    }, "")
}