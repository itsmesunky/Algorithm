const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const trees = input[1].split(" ").map(Number);

const getWoodAmount = (height) => {
  let sum = 0;
  for (const tree of trees) {
    if (tree > height) sum += tree - height;
  }
  return sum;
};

let lt = 0;
let rt = Math.max(...trees);
let answer = 0;

while (lt <= rt) {
  const mid = Math.floor((lt + rt) / 2);
  const wood = getWoodAmount(mid);

  if (wood >= M) {
    answer = mid; // 조건 만족 → 정답 후보로 저장하고 높이를 더 올려봄
    lt = mid + 1;
  } else {
    rt = mid - 1; // 목재가 부족 → 높이를 낮춰야 함
  }
}

console.log(answer);