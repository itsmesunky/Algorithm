const factorial = (n) => {
    let result = 1n;
    for (let i = 2n; i <= n; i++) {
        result *= i;
    }
    return result;
};

const solution = (balls, share) => {
    const b = BigInt(balls);
    const s = BigInt(share);
    
    return factorial(b) / (factorial(s) * factorial(b - s));
};
