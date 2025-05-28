const solution = (number, limit, power) => {
    const measureLength = [];
    
    for(let i = 1; i <= number; i++) {
        let length = 0;
        
        for(let j = 1; j <= Math.sqrt(i); j++) {
            if(i % j === 0) {
                length++;
                
                if(j !== i / j) {
                    length++;
                }
            }
        }
        measureLength.push(length);
    }
    
    return measureLength.reduce((acc, cur) => cur > limit ? acc += power : acc += cur, 0);
}