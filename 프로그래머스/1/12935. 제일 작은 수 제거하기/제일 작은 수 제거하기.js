const solution = (arr) => {
    const min = Math.min(...arr);
    const array =  arr.filter(item => item !== min);
    
    return array.length ? array : [-1];
}