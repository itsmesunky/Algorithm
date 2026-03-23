const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const trees = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const getMinPos = (mid) => {
  let lt = 0;
  let rt = N - 1;
  let minPos = Infinity;

  while (lt <= rt) {
    const pointer = Math.floor((lt + rt) / 2);

    if (trees[pointer] < mid) {
      lt = pointer + 1;
    } else if (mid <= trees[pointer]) {
      // lower-bound
      rt = pointer - 1;
      minPos = pointer;
    }
  }

  return minPos;
};

const getWoodAmount = (start, height) => {
  let sum = 0;
  for (let i = start; i < N; i++) {
    sum += trees[i] - height;
  }

  return sum;
};

let lt = 1;
let rt = 2_000_000_000;
let answer = 0;

while (lt <= rt) {
  const currentHeight = Math.floor((lt + rt) / 2);
  const sum = getWoodAmount(getMinPos(currentHeight), currentHeight);

  if (sum < M) {
    rt = currentHeight - 1;
  } else if (M <= sum) {
    // upper-bound
    lt = currentHeight + 1;
    answer = currentHeight;
  }
}

console.log(answer);
