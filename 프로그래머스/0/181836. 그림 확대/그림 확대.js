const solution = (picture, k) => {
    const answer = [];
    
    for(const str of picture) {
        for(let i = 0; i < k; i++) {
            answer.push([...str].reduce((s, i) => {
            let count = 1;
            
            while(count <= k) {
                s += i;
                count++;
            }
            
            return s;
            }, ""));
        }
    }
    
    return answer;
}