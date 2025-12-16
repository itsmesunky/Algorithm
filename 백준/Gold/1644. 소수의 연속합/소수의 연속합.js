const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const N = parseInt(input);

// 1. 에라토스테네스의 체로 소수 구하기 (핵심!)
const isPrime = new Array(N + 1).fill(true);
isPrime[0] = false;
isPrime[1] = false;

for (let i = 2; i * i <= N; i++) {
  if (isPrime[i]) {
    // i의 배수들을 모두 지움 (i*i부터 시작해도 됨)
    for (let j = i * i; j <= N; j += i) {
      isPrime[j] = false;
    }
  }
}

// 소수만 따로 모으기
const primes = [];
for (let i = 2; i <= N; i++) {
  if (isPrime[i]) primes.push(i);
}

// 2. 투 포인터 (누적합 배열 없이 sum 변수로 관리)
let answer = 0;
let lt = 0;
let rt = 0;
let sum = 0;

while (true) {
  if (sum >= N) {
    if (sum === N) answer++; // 정답 찾음
    sum -= primes[lt]; // 왼쪽 포인터 이동 (값을 뺌)
    lt++;
  } else if (rt === primes.length) {
    break; // rt가 끝에 도달했고 sum < N이면 더 이상 가망 없음
  } else {
    sum += primes[rt]; // 오른쪽 포인터 이동 (값을 더함)
    rt++;
  }
}

console.log(answer);