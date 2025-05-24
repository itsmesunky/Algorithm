const solution = (s) => {
    let p = 0;
    let y = 0;
    
    for(const char of s) {
        if(/p|P/.test(char)) p++;
        if(/y|Y/.test(char)) y++;        
    }
    
    return p === y ? true : false;
}