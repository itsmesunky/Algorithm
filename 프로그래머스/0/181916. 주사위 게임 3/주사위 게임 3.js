const solution = (a, b, c, d) => {
    const map = new Map();
    
    [a, b, c, d].forEach((item, i) => map.set(item, (map.get(item) || 0) + 1));
    
    switch(map.size) {
        case 1:
            return 1111 * a;
        case 2:
            if([...map.values()].includes(3)) {
                let p = 0;
                let q = 0;
                [...map.keys()].forEach(item => map.get(item) === 3 ? p = item : q = item);
                return Math.pow((10 * p + q), 2);
            } else {
                const [p, q] = [...map.keys()];
                return (p + q) * Math.abs(p - q);
            }
        case 3:
            return [...map.keys()].reduce((acc, cur) => map.get(cur) === 1 ? acc *= cur : acc *= 1, 1);
        case 4:
            return Math.min(...map.keys());
    }
}