/**
 * 문제 해결 시나리오
 * - 목표: 식 내 특정 부분을 괄호로 묶어서 최솟값 도출해내기
 * - 해결방안
 *   - '-' 뒤에 위치하는 피연산자의 값을 괄호로 묶어 최댓값으로 만들고 그 값을 빼면 됨
 */
const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const numbers = input
  .split('-')
  .map((str) => str.split('+').reduce((acc, cur) => acc + parseInt(cur), 0));

let result = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  result -= numbers[i];
}

console.log(result);
