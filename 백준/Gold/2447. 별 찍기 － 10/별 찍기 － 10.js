const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 입력값
const N = parseInt(input[0]);

const star = (n) => {
  // base-case
  if (n === 3) return ["***", "* *", "***"];

  // divide & conquer
  const prev = star(n / 3);
  const top = prev.map((str) => str.repeat(3));
  const mid = prev.map((str) => str + " ".repeat(n / 3) + str);
  const btm = prev.map((str) => str.repeat(3));

  // combine
  return [...top, ...mid, ...btm];
};

console.log(star(N).join('\n'));
