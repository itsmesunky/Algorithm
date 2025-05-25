const getMeasure = (num) => {
    const measure = [];
    
    let i = 1;
    
    while(i <= Math.sqrt(num)) {
        if(num % i === 0) {
            measure.push(i);
            
            if(i !== num / i)  measure.push(num / i);
        }
        i++;
    }
    
    return measure.length;
}

const solution = (left, right) => {
    let result = 0;
    
    for(let i = left; i <= right; i++) {
        if(getMeasure(i) % 2 === 0) {
            result += i;
        } else {
            result -= i;
        }
    }
    
    return result;
}