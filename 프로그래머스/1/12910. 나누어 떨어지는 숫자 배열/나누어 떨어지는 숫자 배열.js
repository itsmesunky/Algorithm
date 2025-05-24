const solution = (arr, divisor) => {
    const result = arr.filter(item => item % divisor === 0).sort((a, b) => a - b);
    return result.length ? result : [-1];
}