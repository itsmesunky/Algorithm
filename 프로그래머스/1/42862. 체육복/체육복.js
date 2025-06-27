const solution = (n, lost, reserve) => {
    const filteredLost = lost.filter(student => !reserve.includes(student)).sort((a, b) => a - b);
    const filteredReserve = reserve.filter(student => !lost.includes(student)).sort((a, b) => a - b);
    
    let answer = n - filteredLost.length;
    
    for(let i = 0; i < filteredLost.length; i++) {
        const idx = filteredReserve.findIndex(r => Math.abs(r - filteredLost[i]) === 1);
        
        if(idx !== -1) {
            answer++;
            filteredReserve.splice(0, 1);
        }
        
    }
    
    return answer;
}