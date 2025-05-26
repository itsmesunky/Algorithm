const solution = (s) => {
    let str = "";
    const result = [];
    
    [...s].forEach((char, i) => {
        if(str.includes(char)) {
            result.push(i - str.lastIndexOf(char));
        } else {
            result.push(-1);
        }
        
        str += char;
    })
    
    return result;
}