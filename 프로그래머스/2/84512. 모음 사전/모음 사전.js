const solution = (word) => {
    let answer = 0;
    const gather = ['A', 'E', 'I', 'O', 'U'];
    
    const dfs = (currentWord) => {
        if(currentWord === word) return true;
        if(currentWord.length === 5) return false;
        
        for(let i = 0; i < gather.length; i++) {
            answer++;
            if(dfs(currentWord + gather[i])) return true;
        }
        
        return false;
    }
    
    dfs('');
    
    return answer;
};
