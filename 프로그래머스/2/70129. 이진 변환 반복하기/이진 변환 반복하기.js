const solution = (s) => {
    let [loopCount, zeroCount] = [0, 0];
    
    while(s !== "1") {
        if(s.indexOf('0') !== -1) {
            zeroCount += [...s].filter(char => char === '0').length;
            s = s.replaceAll('0', '');
        }
        
        if(s !== '1') {
            s = s.length.toString(2);
        }
        
        loopCount++;
    }
    
    return [loopCount, zeroCount];
}