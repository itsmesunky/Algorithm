const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 입력값
const TC = parseInt(input.shift());
const infos = [];

// 입력값 그룹화
for (let i = 0; i < input.length; i += 3) {
  infos.push(
    input.slice(i, i + 3).map((str, j) => {
      if (j < 2) return str.replaceAll("\r", "");
      else return JSON.parse(str);
    })
  );
}

for (let i = 0; i < TC; i++) {
  let [commands, n, arr] = infos[i];
  n = parseInt(n);

  const result = [];

  let flag = true;
  let isReverse = false;

  // 투 포인터
  let lt = 0;
  let rt = n - 1;

  for (const command of commands) {
    if (command === "D") {
      if (isReverse) rt--;
      else lt++;

      if (lt > rt + 1) {
        console.log("error");
        flag = false;
        break;
      }
    } else {
      isReverse = !isReverse;
    }
  }

  if (!flag) continue;
  if (isReverse) {
    while (lt <= rt) result.push(arr[rt--]);
  } else {
    while (lt <= rt) result.push(arr[lt++]);
  }

  console.log("[" + result.join(",") + "]");
}
