const getGCD = (x, y) => {
    return (x % y) ? getGCD(y, x % y) : y;
}

const solution = (numer1, denom1, numer2, denom2) => {
    const [numer, denom] = [(numer1 * denom2) + (numer2 * denom1), denom1 * denom2];
    
    const GCD = getGCD(numer, denom);
    
    return [numer / GCD, denom / GCD];
}

