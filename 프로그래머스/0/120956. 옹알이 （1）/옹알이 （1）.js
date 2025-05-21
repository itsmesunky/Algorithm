const solution = (babbling) => {
    return babbling.reduce((acc, cur) => cur.replace(/(aya|ye|woo|ma)/g, "").length ? acc += 0 : acc += 1, 0);
}