const solution = (dots) => {
    const [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots;
    
    const compare1 = (Math.abs(y1 - y3) / Math.abs(x1 - x3)) === (Math.abs(y2 - y4) / Math.abs(x2 - x4));
    const compare2 = (Math.abs(y3 - y4) / Math.abs(x3 - x4)) === (Math.abs(y1 - y2) / Math.abs(x1 - x2));
    const compare3 = (Math.abs(y3 - y2) / Math.abs(x3 - x2)) === (Math.abs(y1 - y4) / Math.abs(x1 - x4));
    
    return compare1 || compare2 || compare3 ? 1 : 0;
}