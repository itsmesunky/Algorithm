const solution = (common) => {
    const [a, b, c] = [common.at(-3), common.at(-2), common.at(-1)];
    
    const diff1 = b - a;
    const diff2 = c - b;
    
    return diff1 === diff2 ? c + diff1 : b * c / a
}