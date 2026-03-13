const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(/\r?\n/);

const [S, P] = input[0].split(" ").map(Number);
const originStr = input[1];

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
const slicedStr = originStr.slice(0, P);
for (const char of slicedStr) {
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
  newMap.set(originStr[lt], newMap.get(originStr[lt]) - 1);
  lt++;
  rt++;
  newMap.set(originStr[rt], newMap.get(originStr[rt]) + 1);
  if (isValid()) answer++;
}

console.log(answer);
