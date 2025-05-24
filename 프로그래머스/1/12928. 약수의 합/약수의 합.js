const solution = (n) => {
    return Array.from({length: n}, (_, i) => i + 1).reduce((acc, cur) => n % cur ? acc += 0 : acc  += cur, 0)
}