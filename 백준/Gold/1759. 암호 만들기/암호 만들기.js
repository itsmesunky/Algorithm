const input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

// 입력값
const L = parseInt(input[0].split(" ")[0]);
const chars = input[1].split(" ").sort();

/**
 * 길이 L의 문자열이 최소 한 개의 모음, 최소 두 개의 자음으로 이루어졌는지를 판단하는 헬퍼 함수
 * @param {string} arr- 길이 L의 문자열
 * @returns {boolean}
 */
const isValid = (str) => {
  const vowel = str.match(/(a)|(e)|(i)|(o)|(u)+/g)?.length ?? 0;
  return 1 <= vowel && 2 <= str.length - vowel;
};

const results = [];

const recursive = (idx, arr) => {
  if (arr.length === L) {
    const str = arr.join("");
    if (isValid(str)) results.push(str);
    return;
  }

  for (let i = idx; i < chars.length; i++) {
    arr.push(chars[i]);
    recursive(i + 1, arr);
    arr.pop(); // 백트래킹
  }
};

recursive(0, []);
console.log(results.join("\n"));