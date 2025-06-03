const solution = (N, stages) => {
    const array = [];
    
    for(let i = 1; i <= N; i++) {
        let notClearPlayer = stages.filter(v => v === i).length;
        let reachPlayer = stages.filter(v => v >= i).length;
        array.push([i, (notClearPlayer / reachPlayer).toFixed(20)]);
    }
    
    return array.sort((a, b) => a[1] === b[1] ? a[0] - b[0] : b[1] - a[1]).map(([stage, failureRate]) => stage)
}