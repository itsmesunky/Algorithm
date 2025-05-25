const solution = (a, b) => {
    return a.reduce((acc, cur, i) => acc += b[i] * cur, 0);
}