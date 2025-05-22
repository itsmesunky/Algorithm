const solution = (d, budget) => {
    return [...d].sort((a, b) => a - b).reduce((acc, cur) => {
        if(budget <= 0) {
            return acc += 0;
        } else {
            budget -= cur;
            
            return budget >= 0 ? acc += 1 : acc += 0;
        }
    }, 0)
}