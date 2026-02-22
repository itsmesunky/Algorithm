const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input.shift().split(' ').map(Number);

let answer = Infinity;

const dirs = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const inactives = [];
const board = input.map((str, row) =>
  str
    .replace('\r\n', '')
    .split(' ')
    .map((char, col) => {
      if (char === '2') inactives.push([row, col]);
      return +char;
    }),
);

const spreadVirus = (array) => {
  let totalTimes = 0;

  const copiedBoard = board.map((row) => [...row]);
  for (const [x, y] of array) {
    copiedBoard[x][y] = -1;
  }

  let head = 0;
  const queue = array.map((arr) => [...arr, 0]);

  while (head < queue.length) {
    const [currRow, currCol, currTimes] = queue[head++];

    for (const [dx, dy] of dirs) {
      const nextRow = currRow + dx;
      const nextCol = currCol + dy;

      if (N <= nextRow || nextRow < 0 || N <= nextCol || nextCol < 0) continue;

      if (
        copiedBoard[nextRow][nextCol] === 0 ||
        copiedBoard[nextRow][nextCol] === 2
      ) {
        if (copiedBoard[nextRow][nextCol] === 0) totalTimes = currTimes + 1;
        copiedBoard[nextRow][nextCol] = -1;
        queue.push([nextRow, nextCol, currTimes + 1]);
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (copiedBoard[i][j] === 0) return Infinity;
    }
  }

  return totalTimes;
};

const recursive = (idx, array) => {
  if (array.length === M) {
    answer = Math.min(spreadVirus(array), answer);
    return;
  }

  for (let i = idx; i < inactives.length; i++) {
    array.push(inactives[i]);
    recursive(i + 1, array);
    array.pop();
  }
};

recursive(0, []);
console.log(answer === Infinity ? -1 : answer);
