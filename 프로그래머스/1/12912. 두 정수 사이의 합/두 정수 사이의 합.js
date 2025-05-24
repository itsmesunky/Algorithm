const solution = (a, b) => {
    const [min, max] = [a, b].sort((a, b) => a - b);
    return (min + max) * (max - min + 1) * 1 / 2;
}