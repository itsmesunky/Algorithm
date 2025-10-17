const solution = (n, computers) => {
    let answer = 0;
    
    const visited = Array(n).fill(false);
    
    const dfs = (idx) => {
        visited[idx] = true;
        
        for(let i = 0; i < computers[idx].length; i++) {
            if(!visited[i] && computers[idx][i]) dfs(i);
        }
    }
    
    for(let i = 0; i < computers.length; i++) {
        if(!visited[i]) {
            visited[i] = true;
            answer++;
            
            for(let j = i + 1; j < computers[i].length; j++) {
                if(!visited[j] && computers[i][j]) {
                    dfs(j);
                }
            }
        }
    }
    
    return answer;
}