const solution = (s) => {
    const set = new Set();
    
    JSON.parse(s.replaceAll("{", "[").replaceAll("}", "]"))
        .sort((a, b) => a.length - b.length)
        .forEach(a => a.forEach(b => set.add(b)));
    
    return [...set];
}