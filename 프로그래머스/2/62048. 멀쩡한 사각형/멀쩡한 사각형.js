const GCD = (a, b) => a % b ? GCD(b, a % b) : b;

const solution = (w, h) => {
    const original = w * h;
    return original - (w + h - GCD(w, h));
}