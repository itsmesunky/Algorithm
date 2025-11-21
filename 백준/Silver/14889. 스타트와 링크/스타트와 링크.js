const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 입력값
const N = parseInt(input[0]); // 선수의 수
const array = input.slice(1).map((str) => str.split(" ").map(Number));

const maxPeopleCount = N / 2;
const status = Array(N).fill(false);
status[0] = true;

const calculateAbiltyDiff = () => {
  const team1 = [];
  const team2 = [];

  status.forEach((bool, i) => {
    if (bool) {
      team1.push(i);
    } else {
      team2.push(i);
    }
  });

  let total1 = 0;
  let total2 = 0;

  for (let i = 0; i < maxPeopleCount; i++) {
    for (let j = i + 1; j < maxPeopleCount; j++) {
      total1 += array[team1[i]][team1[j]] + array[team1[j]][team1[i]];
      total2 += array[team2[i]][team2[j]] + array[team2[j]][team2[i]];
    }
  }

  return Math.max(total1, total2) - Math.min(total1, total2);
};

let answer = Number.MAX_SAFE_INTEGER;

// 조합 생성
const recursive = (idx, count) => {
  if (count === maxPeopleCount) {
    answer = Math.min(calculateAbiltyDiff(), answer);
    return;
  }

  for (let i = idx + 1; i < N; i++) {
    status[i] = true;
    recursive(i, count + 1);
    status[i] = false;
  }
};

recursive(0, 1);
console.log(answer);
