const solution = (number) => {
    const arrays = [];
    let result = 0;
    
    for(let i = 0;  i <= number.length - 3; i++) {
        for(let j = i + 1; j <= number.length - 2; j++) {
            for(let k = j + 1; k <= number.length - 1; k++) {
                arrays.push([number[i], number[j], number[k]]);
            }
        }
    }
    
    arrays.forEach(item => item.reduce((acc, cur) => acc += cur, 0) || result++)
    
    return result;
}