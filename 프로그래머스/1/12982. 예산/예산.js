const solution = (d, budget) => {
    return [...d].sort((a, b) => a - b).reduce((acc, cur) => acc += ((budget -= cur) >= 0), 0);
}