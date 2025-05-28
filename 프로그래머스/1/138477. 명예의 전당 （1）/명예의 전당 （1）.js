const solution = (k, score) => {
    const temple = [];
    const result = [];
    let day = 0;
    
    while(day < score.length) {
        if(day < k) {
            temple.push(score[day]);
        } else {
            let min = Math.min(...temple);
            
            if(score[day] > min) {
                temple[temple.indexOf(min)] = score[day];
            }
        }
        
        result.push(Math.min(...temple));
        day++;
    }
    
    return result;
}