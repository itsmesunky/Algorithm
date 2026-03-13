const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split(/\r?\n/);

const info = input.map((str) => str.split(" ").map(Number));

const N = info.shift()[0];

const prefixSum = [0, ...info.shift()];
for (let i = 2; i <= N; i++) {
  prefixSum[i] += prefixSum[i - 1];
}

const resultSet = [];
for (const [start, end] of info) {
  resultSet.push(prefixSum[end] - prefixSum[start - 1]);
}

console.log(resultSet.join("\n"));