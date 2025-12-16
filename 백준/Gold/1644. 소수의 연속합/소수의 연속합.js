const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);

function isPrime(num) {
  const sqrt = Math.sqrt(num);
  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function getPrime() {
  const primes = [0, 2, 3];
  for (let num = 4; num <= N; num++) {
    if (isPrime(num)) primes.push(num);
  }
  return primes;
}

const prefixSum = getPrime();
for (let i = 1; i < prefixSum.length; i++) {
  prefixSum[i] += prefixSum[i - 1];
}

let answer = 0;
let lt = 1;
let rt = 1;

while (lt <= rt && rt < prefixSum.length) {
  const sum = prefixSum[rt] - prefixSum[lt - 1];
  if (sum === N) {
    answer++;
    lt++;
  } else if (sum < N) {
    rt++;
  } else {
    lt++;
  }
}

console.log(answer);