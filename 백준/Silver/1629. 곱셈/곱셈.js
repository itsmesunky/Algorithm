const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 입력값
const [A, B, C] = input[0].split(" ").map(BigInt);

function solve(a, b, c) {
  if (b === 0n) return 1n;
  if (b === 1n) return a % c;

  const temp = solve(A, b / 2n, c);

  if (b % 2n === 0n) {
    return (temp * temp) % c;
  } else {
    return (((temp * temp) % c) * a) % c;
  }
}

console.log(solve(A, B, C).toString());
