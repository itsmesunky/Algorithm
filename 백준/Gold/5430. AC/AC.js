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
      if (j < 2) {
        return str.replaceAll("\r", "");
      } else {
        return JSON.parse(str);
      }
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
      if (rt < lt) {
        // 배열이 빈 상태
        console.log("error");
        flag = false;
        break;
      } else {
        if (isReverse) rt--;
        else lt++;
      }
    } else {
      isReverse = !isReverse;
    }
  }

  if (!flag) continue;

  const sliced = arr.slice(lt, rt + 1);
  if (isReverse) result.push(sliced.reverse());
  else result.push(sliced);

  console.log("[" + result.join(",") + "]");
}
