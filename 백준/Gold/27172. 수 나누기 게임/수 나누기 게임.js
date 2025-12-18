const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const numbers = input[1].split(" ").map(Number);
const MAX_NUMBER = Math.max(...numbers);

const set = new Set(numbers);
const result = Array(MAX_NUMBER + 1).fill(0);
for (const number of numbers) {
  for (let j = number * 2; j <= MAX_NUMBER; j += number) {
    if (set.has(j)) {
      result[number]++;
      result[j]--;
    }
  }
}

const answer = [];
for (const number of numbers) {
  answer.push(result[number]);
}

console.log(answer.join(" "));