const solution = (cards1, cards2, goal) => {
    const map = new Map();
    map.set("cards1", 0);
    map.set("cards2", 0);
    
    let result = "Yes";
    
    goal.forEach((v, i) => {
        const key = cards1.some(card => card === v) ? "cards1" : "cards2";
        const idx = cards1.indexOf(v) === -1 ? cards2.indexOf(v) : cards1.indexOf(v);
        
        if(idx - map.get(key) > 1) {
            result = "No";
        }
        
        map.set(key, idx);
    })
    
    return result;
}
