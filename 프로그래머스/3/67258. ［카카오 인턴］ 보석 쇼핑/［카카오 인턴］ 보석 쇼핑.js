const solution = (gems) => {
    let answer = [0, gems.length - 1];
    
    const kinds = new Set(gems).size;
    
    const counter = new Map();
    
    let left = 0;
    for(let right = 0; right < gems.length; right++) {
        const rKey = gems[right];
        counter.set(rKey, (counter.get(rKey) || 0) + 1);
        
        while(counter.size === kinds) {
            if(right - left < answer[1] - answer[0]) {
                answer = [left, right];
            }
            
            const lKey = gems[left];
            counter.set(lKey, counter.get(lKey) - 1);
            if(!counter.get(lKey)) counter.delete(lKey);
            left++;
        }
    }
    
    return [answer[0] + 1, answer[1] + 1];
}