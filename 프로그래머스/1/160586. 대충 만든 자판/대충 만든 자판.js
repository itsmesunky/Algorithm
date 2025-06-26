const solution = (keymap, targets) => {
    return targets.map(target => {
        let answer = 0;
        
        for(const char of target) {
            const filter = keymap.map(key => key.indexOf(char)).filter(count => count !== -1);
            
            if(filter.length === 0) {
                return -1;
            } else {
                answer += Math.min(...filter) + 1;
            }
        }
        
        return answer;
    })
}