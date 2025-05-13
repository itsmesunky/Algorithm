const solution = (dots) => {
    const [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots;
    const [height1, height2] = [...new Set([y1, y2, y3, y4])].sort();
    const [width1, width2] = [...new Set([x1, x2, x3, x4])].sort();
    
    const width = Math.abs(width2 - width1);
    const height = Math.abs(height2 - height1);
    
    return width * height;
}