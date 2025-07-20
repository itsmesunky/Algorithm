// 두 수의 최대공약수
const GCD = (a, b) => a % b ? GCD(b, a % b) : b;

// 두 수의 최소공배수
const LCM = (a, b) => a * b / GCD(a, b);

const solution = (arr) => {
    return arr.reduce((acc, cur) => LCM(acc, cur));
}