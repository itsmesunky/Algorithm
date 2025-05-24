const solution = (N) => {
    return [...N + ""].reduce((acc, cur) => acc += +cur ,0);
}