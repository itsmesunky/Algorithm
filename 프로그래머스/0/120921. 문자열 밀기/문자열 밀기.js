const solution = (A, B) => {
    if(A === B) {
        return 0;
    }
    
    let str = A;
    
    for(let i = 0; i < A.length - 1; i++) {
        str = str.at(-1) + str.slice(0, str.length - 1);
        
        if(str === B) {
            return i + 1;
        }
    }
    
    return -1;
}