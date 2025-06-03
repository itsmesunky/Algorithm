const solution = (babbling) => {
    return babbling.reduce((acc, cur) => /^(aya|ye|woo|ma)+$/.test(cur) && !/(aya|ye|woo|ma)\1/.test(cur) ? acc += 1 : acc += 0, 0);
}