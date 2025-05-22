const solution = (n) => {
    let toStr3 = n.toString(3);
    return parseInt([...toStr3].reverse().join(''), 3);
}