const solution = (n) => {
    let count = 0;
    let result = "";
    
    while(count < n) {
        if(count % 2 === 0) {
            result += "수";
        } else{
            result += "박";
        }
        
        count++;
    }
    
    return result;
}