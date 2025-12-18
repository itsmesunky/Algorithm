const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const N = parseInt(input.shift());

const infos = input[0].split(" ").map(Number);
const numbers = [...infos].sort((a, b) => a - b);

const MAX_NUMBER = numbers.at(-1);

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
for (const number of infos) {
  answer.push(result[number]);
}

console.log(answer.join(" "));
