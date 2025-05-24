const solution = (n) => {
    return [...n + ""].map(item => +item).reverse();
}