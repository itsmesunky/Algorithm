const solution = (word) => {
    const chars = [];
    const gather = ['A', 'E', 'I', 'O', 'U'];
    let answer = 0;
    let flag = false;
    
    const dfs = (idx) => {
        for(let i = 0; i < gather.length; i++) {
            chars[idx] = gather[i];
            answer++;
            
            if(chars.join('') === word) {
                flag = true;
                return;
            }
            
            if(idx === gather.length - 1) {
                continue;
            }
            
            dfs(idx + 1);

            if(flag) return;
        }
        
        chars[idx] = '';
        
    }
    
    dfs(0);
    return answer;
}