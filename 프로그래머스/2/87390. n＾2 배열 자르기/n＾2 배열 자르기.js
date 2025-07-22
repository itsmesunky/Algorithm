const solution = (n, left, right) => {
    const result = [];
    
    for(let i = left; i <= right; i++) {
        const row = Math.floor(i / n);
        const column = i % n;
        
        result.push(Math.max(row, column) + 1);
    }
    
    return result;
}