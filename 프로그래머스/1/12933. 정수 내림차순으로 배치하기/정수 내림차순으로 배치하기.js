const solution = (n) => {
    return +[...n + ""].sort().reverse().join('');
}