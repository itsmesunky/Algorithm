const solution = (score) => {
    const sums = score.map(v => v[0] + v[1]);
    const rank = Array.from({length: score.length}).fill(1);
    
    for(let i = 0; i < score.length; i++) {
        for(let j = 0; j < score.length; j++) {
            if(sums[i] < sums[j]) {
                rank[i]++;
            }
        }
    }
    
    return rank;
}