const input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

// 입력값
const N = parseInt(input.shift());
const arr = input.shift().split(" ").map(Number);

const mid = Math.floor(N / 2);

// 산성 용액만 있는 경우
if (N === 2 || 0 < arr[0]) {
  console.log(arr[0], arr[1]);
  return;
}

let lt = 0;
let rt = N - 1;

let num1 = arr[lt];
let num2 = arr[rt];
let minSum = Infinity;

while (lt < rt) {
  const sum = arr[lt] + arr[rt];

  if (Math.abs(0 - sum) < minSum) {
    minSum = Math.abs(0 - sum);
    num1 = arr[lt];
    num2 = arr[rt];
  }

  if (sum < 0) {
    lt++;
  } else if (0 < sum) {
    rt--;
  } else {
    console.log(arr[lt], arr[rt]);
    return;
  }
}

console.log(num1, num2);
