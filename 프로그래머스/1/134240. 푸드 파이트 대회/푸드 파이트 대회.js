const solution = (food) => {
    const result = [];
    
    food.forEach((v, i) => {
        if(i > 0) {
            let count = 0;
            
            while(count < Math.floor(v / 2)) {
                result.push(i);
                count++;
            }
        }
    })
    
    return [...result, 0, ...result.reverse()].join('');
}