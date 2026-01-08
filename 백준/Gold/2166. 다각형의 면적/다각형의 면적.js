const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = Number(input[0]);
const points = input.slice(1).map(line => line.split(" ").map(Number));

let sum = 0;

for (let i = 0; i < N; i++) {
  const [x1, y1] = points[i];
  const [x2, y2] = points[(i + 1) % N];
  sum += x1 * y2 - y1 * x2;
}

const area = Math.abs(sum) / 2;

console.log(area.toFixed(1));