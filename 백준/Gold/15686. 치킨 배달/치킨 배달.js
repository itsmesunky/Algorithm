const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 입력값
const [_, M] = input[0].split(' ').map(Number);
const board = input.slice(1).map((str) => str.split(' ').map(Number));

const homes = [];
const chickens = [];

board.forEach((row, i) =>
  row.forEach((col, j) => {
    if (col === 1) homes.push([i, j]);
    else if (col === 2) chickens.push([i, j]);
  })
);

let answer = Infinity;

/**
 * updateMinDist - 도시 치킨 거리를 최솟값으로 갱신하는 함수
 * @param {array} combines - 치킨집 좌표 조합
 */
const updateMinDist = (combines) => {
  const map = new Map();

  // 치킨 거리 갱신
  homes.forEach(([hRow, hCol], i) => {
    map.set(i, Infinity);

    combines.forEach(([cRow, cCol]) => {
      const manhattanDist = Math.abs(cRow - hRow) + Math.abs(cCol - hCol);
      if (manhattanDist < map.get(i)) map.set(i, manhattanDist);
    });
  });

  // 최소 도시 치킨 거리 갱신
  const value = [...map.values()].reduce((acc, cur) => acc + cur, 0);
  answer = Math.min(value, answer);
};

/**
 * getCombine - 치킨집 조합을 생성하는 함수
 * @param {array} arr - 좌표 조합
 * @param {number} idx - 치킨집 좌표를 가리킬 인덱스
 * @returns
 */
const getCombine = (arr, idx) => {
  if (arr.length === M) {
    updateMinDist(arr);
    return;
  }

  for (let i = idx; i < chickens.length; i++) {
    arr.push(chickens[i]);
    getCombine(arr, i + 1);
    arr.pop();
  }
};

getCombine([], 0);
console.log(answer);
