const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const numbers = input[1].split(' ').map(Number);
const ops = input[2].split(' ').map(Number); // [+ - * /]

let maxVal = -Infinity;
let minVal = Infinity;

function dfs(idx, current, plus, minus, mul, div) {
    if (idx === N) {
        maxVal = Math.max(maxVal, current);
        minVal = Math.min(minVal, current);
        return;
    }

    if (plus > 0) {
        dfs(idx + 1, current + numbers[idx], plus - 1, minus, mul, div);
    }
    if (minus > 0) {
        dfs(idx + 1, current - numbers[idx], plus, minus - 1, mul, div);
    }
    if (mul > 0) {
        dfs(idx + 1, current * numbers[idx], plus, minus, mul - 1, div);
    }
    if (div > 0) {
        // JS에서 음수 나누기는 백준 규칙에 따라 0쪽으로 버림 처리 필요
        const next =
            current < 0
                ? -Math.floor(Math.abs(current) / numbers[idx])
                : Math.floor(current / numbers[idx]);

        dfs(idx + 1, next, plus, minus, mul, div - 1);
    }
}

dfs(1, numbers[0], ops[0], ops[1], ops[2], ops[3]);
console.log(maxVal + '\n' + minVal);
