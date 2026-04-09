const solution = (queue1, queue2) => {
    const joined = queue1.concat(queue2);
    
    const total = joined.reduce((acc, cur) => acc + cur, 0);
    if(total % 2) return -1;
    
    const goal = total / 2;
    let sum = queue1.reduce((acc, cur) => acc + cur, 0);
    let lt = 0, rt = queue1.length;
    let count = 0;
    
    while(count < 2 * joined.length && lt < joined.length && rt < joined.length) {
        if(sum === goal) {
            return count;
        } else if(sum < goal) {
            sum += joined[rt++];
        } else {
            sum -= joined[lt++];
        }
        
        count++;
    }
    
    return -1;
}