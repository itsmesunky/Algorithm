function solution(strArr) {
    let countByStrLength = {};
    
    for(const str of strArr) {
        countByStrLength[str.length] = (countByStrLength[str.length] ?? 0) + 1;
    }
    
    return Math.max(...Object.values(countByStrLength))
}