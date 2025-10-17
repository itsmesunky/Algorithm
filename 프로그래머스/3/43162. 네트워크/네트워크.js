const solution = (n, computers) => {
    let answer = 0;
    
    const visited = Array(n).fill(false);
    
    const dfs = (idx) => {
        visited[idx] = true;
        
        for(let i = 0; i < n; i++) {
            if(!visited[i] && computers[idx][i]) dfs(i);
        }
    }
    
    for(let i = 0; i < computers.length; i++) {
        if(!visited[i]) {
            visited[i] = true;
            answer++;
            dfs(i);
        }
    }
    
    return answer;
}