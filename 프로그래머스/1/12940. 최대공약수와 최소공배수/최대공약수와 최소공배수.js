const getGCD = (x, y) => {
    return (x % y) ? getGCD(y, (x % y)) : y;
}

const solution = (n, m) => {
    const GCD = getGCD(n, m);
    const LCM = (n * m) / GCD;
    
    return [GCD, LCM];
}