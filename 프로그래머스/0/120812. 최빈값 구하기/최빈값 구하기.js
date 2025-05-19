const solution = (array) => {
    const counts = Array.from({length: 1000}, () => 0);
    
    for(const num of array) {
        counts[num]++;
    }
    
    const max = Math.max(...counts)
    const maxs = counts.filter(v => v === max);
    
    return maxs.length === 1 ? counts.indexOf(max) : -1;
}