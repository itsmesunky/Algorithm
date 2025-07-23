const solution = (clothes) => {
    // 의상 종류 : 수
    const obj = {};
    
    for(const [_, div] of clothes) {
        obj[div] = (obj[div] ?? 0) + 1;
    }
    
    return Object.values(obj).reduce((acc, cur) => acc * (cur + 1), 1) - 1;
}