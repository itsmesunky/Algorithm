function solution(arr) {
    const NUMBER = 2;
    
    const firstIdx = arr.indexOf(NUMBER);
    const lastIdx = arr.lastIndexOf(NUMBER);
    
    let answer = [];
    
    if(firstIdx === -1) {
        return [-1];
    }
    
    if(firstIdx === lastIdx) {
        return arr.slice(firstIdx, firstIdx + 1);
    } else {
        return arr.slice(firstIdx, lastIdx + 1);
    }
}