const solution = (dots) => {
    const xPositions = [];
    const yPositions = [];
    
    for(const pos of dots) {
        xPositions.push(pos[0]);
        yPositions.push(pos[1]);
    }
    
    const width = Math.max(...xPositions) - Math.min(...xPositions);
    const height = Math.max(...yPositions) - Math.min(...yPositions);
    
    return Math.abs(width * height);
}