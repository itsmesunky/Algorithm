const solution = (s) => {
    const map = new Map();
    
    const result = [...s].map((char, i) => {
        if(map.has(char)) {
            const diff = i - map.get(char);
            map.set(char, i);
            return diff;
        } else {
            map.set(char, i);
            return -1;
        }
    })
    
    return result;
}