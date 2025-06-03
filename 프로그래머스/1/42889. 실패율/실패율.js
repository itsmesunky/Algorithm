const solution = (N, stages) => {
    const failureRates = [];
    
    for(let i = 1; i <= N; i++) {
        const notClearPlayer = stages.filter(v => v === i).length;
        const reachPlayer = stages.filter(v => v >= i).length;
        failureRates.push([i, (notClearPlayer / reachPlayer)]);
    }
    
    return failureRates.sort((a, b) => b[1] - a[1] || a[0] - b[0])
                        .map(([stage, failureRate]) => stage)
}