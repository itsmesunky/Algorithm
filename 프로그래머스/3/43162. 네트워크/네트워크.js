const solution = (n, computers) => {
    let answer = 0;
    
    const graph = Array.from({length: n + 1}, () => []);
    const visited = Array(n + 1).fill(false);
    
    computers.forEach((computer, i) => {
        computer.forEach((num, j) => {
            if(i < j && num) {
                graph[i + 1].push(j + 1);
                graph[j + 1].push(i + 1);
            }
        })
    });
    
    const dfs = (idx) => {
        visited[idx] = true;
        
        for(let i = 0; i < graph[idx].length; i++) {
            const node = graph[idx][i];
            if(!visited[node]) {
                dfs(node);
            }
        }
    }
    
    for(let i = 1; i < graph.length; i++) {
        if(!visited[i]) {
            answer++;
            dfs(i);
        }
    }
    
    return answer;
}