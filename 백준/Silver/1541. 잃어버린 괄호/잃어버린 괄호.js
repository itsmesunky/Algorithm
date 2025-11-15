const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const expression = input
  .replace(/[^\d]/g, (matcher) => (matcher === '-' ? ' - ' : ' + '))
  .split(' ')
  .map((value, idx) => (idx % 2 ? value : +value));

const stack = [];

for (const value of expression) {
  if (stack.length && Number.isInteger(value) && stack.at(-1) === '+') {
    stack.pop();
    stack.push(value + stack.pop());
  } else {
    stack.push(value);
  }
}

if (stack.length === 1) {
  console.log(stack.pop());
} else {
  let express = '';
  for (const value of stack) {
    express += value;
  }
  console.log(eval(express));
}
