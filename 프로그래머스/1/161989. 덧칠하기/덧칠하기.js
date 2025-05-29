const solution = (n, m, section) => {
    const walls = Array(n + 1).fill(0);
    
    return section.reduce((paintCount, sec) => {
        if(walls[sec] !== 1) {
            for(let i = sec; i < sec + m; i++) {
                walls[i] = 1;
            }
            return paintCount + 1;
        } else {
            return paintCount;
        }
    }, 0);
}