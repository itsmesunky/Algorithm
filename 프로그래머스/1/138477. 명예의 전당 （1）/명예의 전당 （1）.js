const solution = (k, score) => {
    const hof = [];
    const result = [];
    
    for(let i = 0; i < score.length; i++) {
        hof.push(score[i]);
        hof.sort((a, b) => b - a);
        
        if(hof.length > k) hof.pop();
        
        result.push(hof.at(-1));
    }
    
    return result;
}