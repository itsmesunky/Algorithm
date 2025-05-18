const solution = (code) => {
    let mode = false;
    
    return [...code].reduce((acc, cur, i) => {
        if(cur === "1") {
            mode = !mode;
            return acc += "";
        }
        
        if(mode) {
            return i % 2 !== 0 ? acc += cur : acc += "";
        } else {
            return i % 2 === 0 ? acc += cur : acc += "";
        }
        
    }, "") || "EMPTY";
    
}