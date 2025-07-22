const solution = (elements) => {
    const len = elements.length;
    const arr = elements.concat(elements);
    const set = new Set();
    
    for(let i = 1; i <= len; i++) {
        let pos = 0;
        
        while(pos < len) {
            let sum = arr.slice(pos, pos + i).reduce((acc, cur) => acc += cur, 0);
            set.add(sum);
            pos++;
        }
    }
    
    return set.size;
}