const solution = (x, y, n) => {
    let level = 1;
    const nodes = [[x]];
    
    while(true) {
        for(let i = 0; i < nodes[level - 1].length; i++) {
            let node = nodes[level - 1][i];
            let newNums = [node + n, node * 2, node * 3];
            
            nodes[level] = (nodes[level] ?? []).concat(newNums);
        }
        
        if(nodes[level].sort((a, b) => a - b)[0] > y) {
            return -1;
        } else if(nodes[level].some(v => v === y)) { // y와 같은 노드가 있다면 해당 level 반환
            return level;
        } else {
            level++;
        }
    }
    
    return -1;
}