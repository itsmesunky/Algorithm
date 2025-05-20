const solution = (lines) => {
    const points = Array.from({length: 201}, () => 0);
    
    for(const [start, end] of lines) {
        for(let i = start; i < end; i++) {
            points[i + 100]++;
        }
    }
    
    return points.filter(point => point >= 2).length;
    
}