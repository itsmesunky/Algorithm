const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);

const items = input[1].split(" ").map(Number);
items.sort((a, b) => a - b);

if (N === 3) {
  console.log(items.join(" "));
  return;
}

let answer = [];
let minValue = Infinity;

for (let idx = 0; idx < N - 2; idx++) {
  let lt = idx + 1;
  let rt = N - 1;

  const fixedItem = items[idx];
  while (lt < rt) {
    const sum = fixedItem + items[lt] + items[rt];
    const absSum = Math.abs(sum);
    if (absSum < minValue) {
      minValue = absSum;
      answer = [fixedItem, items[lt], items[rt]];
    }

    if (sum === 0) {
      console.log(answer.join(" "));
      return;
    }

    if (sum < 0) lt++;
    else rt--;
  }
}

console.log(answer.join(" "));