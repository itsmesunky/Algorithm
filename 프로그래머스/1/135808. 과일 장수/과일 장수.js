const solution = (k, m, score) => {
    let result = 0;
    
    const sortedScore = [...score].sort((a, b) => b - a);
    
    for(let i = 0; i < parseInt(score.length / m); i++) {
        result += sortedScore.slice(i * m, i * m + m).at(-1) * m;
    }
    
    return result;
}