const solution = (polynomial) => {
    const x = polynomial.split("+")
                        .filter(v => v.includes('x'))
                        .replaceAll('x', '1x')
                        .reduce((acc, cur) => acc += parseInt(cur), 0);
    
    const number = polynomial.split("+")
                             .filter(v => !v.includes('x'))
                             .reduce((acc, cur) => acc += cur ,0);
    return x + "x" + number;
}