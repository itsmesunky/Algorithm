const solution = (topping) => {
    let answer = 0;
    
    const a = new Set();
    const b = new Map();
    
    for(const topp of topping) {
        b.set(topp, (b.get(topp) ?? 0) + 1);
    }
    
    for(let i = 0; i < topping.length - 1; i++) {
        const topp = topping[i];
        
        a.add(topp);
        b.set(topp, (b.get(topp) - 1));
        
        if(b.get(topp) === 0) {
            b.delete(topp);
        }
        
        if(a.size === b.size) {
            answer++;
        }
    }
    
    return answer;
}