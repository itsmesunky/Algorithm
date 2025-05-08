function solution(n) {
    const result = new Set();
    let divisor = 2;

    while (n > 1) {
        if (n % divisor === 0) {
            result.add(divisor);
            n = n / divisor;
        } else {
            divisor++;
        }
    }

    return [...result].sort((a, b) => a - b);
}
