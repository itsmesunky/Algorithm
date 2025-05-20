// 최대공약수
const getGCD = (x, y) => {
    const max = Math.max(x, y);
    const min = Math.min(x, y);

    return max % min === 0 ? min : getGCD(min, max % min);
}

const solution = (numer1, denom1, numer2, denom2) => {
    const GCD = getGCD(denom1, denom2);
    
    const LCM = (denom1 * denom2) / GCD;
    
    numer1 *= (LCM / denom1);
    numer2 *= (LCM / denom2);
    denom1 *= (LCM / denom1);
    denom2 *= (LCM / denom2);
    
    const [numer, denom] = [numer1 + numer2, denom1];
    
    const GCD2 = getGCD(numer, denom);
    
    return [numer / GCD2, denom / GCD2];
}