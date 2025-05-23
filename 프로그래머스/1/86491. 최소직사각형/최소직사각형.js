const solution = (sizes) => {
    const maxLength = Math.max(...sizes.flat());
    let min = 0;
    
    sizes.forEach(item => min = Math.max(Math.min(...item), min))
    
    return maxLength * min;
}