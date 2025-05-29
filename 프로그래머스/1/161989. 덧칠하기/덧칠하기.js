const solution = (n, m, section) => {
    let paintCount = 0;
    let lastPainted = 0;
    
    for(const s of section) {
        if(lastPainted < s) {
            paintCount++;
            lastPainted = s + m - 1;
        }
    }
    
    return paintCount;
}