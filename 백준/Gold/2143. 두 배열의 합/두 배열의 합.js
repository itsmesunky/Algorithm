const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const T = parseInt(input[0]);

const n = input[1];
const A = [0, ...input[2].split(" ").map(Number)];

const m = input[3];
const B = [0, ...input[4].split(" ").map(Number)];

const combinesOfA = new Map();
const combinesOfB = new Map();

function setCombines({ right, map, arr }) {
  for (let left = right; 1 <= left; left--) {
    const prefixSum = arr[right] - arr[left - 1];
    map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
  }
}

for (let right = 1; right <= n; right++) {
  A[right] += A[right - 1];
  setCombines({ right, map: combinesOfA, arr: A });
}

for (let right = 1; right <= m; right++) {
  B[right] += B[right - 1];
  setCombines({ right, map: combinesOfB, arr: B });
}

let answer = 0;
for (const [key, value] of combinesOfA) {
  const rest = T - key;
  if (combinesOfB.get(rest)) {
    answer += value * combinesOfB.get(rest);
  }
}

console.log(answer);