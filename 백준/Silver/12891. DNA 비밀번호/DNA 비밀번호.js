const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(/\r?\n/);

const [S, P] = input[0].split(" ").map(Number);
const dnaString = input[1];

const originMap = {
  A: 0,
  C: 0,
  G: 0,
  T: 0,
};

const numbers = input[2].split(" ").map(Number);
Object.keys(originMap).forEach((key, i) => (originMap[key] = numbers[i]));

const newMap = new Map([
  ["A", 0],
  ["C", 0],
  ["G", 0],
  ["T", 0],
]);
for (const char of dnaString.slice(0, P)) {
  newMap.set(char, newMap.get(char) + 1);
}

let lt = 0;
let rt = P - 1;
let answer = 0;

const isValid = () => {
  for (const [key, value] of newMap) {
    if (value < originMap[key]) return false;
  }

  return true;
};

if (isValid()) answer++;
while (rt < S - 1) {
  newMap.set(dnaString[lt], newMap.get(dnaString[lt++]) - 1);
  newMap.set(dnaString[++rt], newMap.get(dnaString[rt]) + 1);
  if (isValid()) answer++;
}

console.log(answer);