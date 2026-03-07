const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const numbers = input[0].split('-').map((str) =>
  str
    .split('+')
    .map(Number)
    .reduce((acc, cur) => acc + cur, 0),
);

console.log(
  numbers.reduce((acc, cur, i) => {
    if (i === 0) return acc + cur;
    return acc - cur;
  }, 0),
);
