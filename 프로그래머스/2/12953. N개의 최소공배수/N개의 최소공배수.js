const solution = (arr) => {
    let i = 2;
    let max = Math.max(...arr);
    let LCM = Math.max(...arr);
    
    while(true) {
        if(arr.every(v => LCM % v === 0)) {
            break;
        }
        
        LCM = max * i++;
    }
    
    return LCM;
}