const solution = (s) => {
    let [loopCount, zeroCount] = [0, 0];
    
    while(s !== "1") {
        loopCount++;
        zeroCount += s.match(/0/g)?.length ?? 0;
        s = s.replaceAll('0', '').length.toString(2);
    }
    
    return [loopCount, zeroCount];
}