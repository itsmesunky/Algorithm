const solution = (n, words) => {
    const set = new Set();
    
    for(let i = 0; i < words.length; i++) {
        const word = words[i];
        
        if(i === 0) {
            set.add(word);
        } else {
            const num = (i % n) + 1;
            const turn = parseInt(i / n) + 1;
            const prev = words[i - 1].at(-1);
            const now = word[0];
            
            if(prev === now) {
                if(set.has(word)) {
                    return [num, turn];
                } else {
                    set.add(word);
                }
            } else {
                return [num, turn];
            }
        }
    }
    
    return [0, 0];
}