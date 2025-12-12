const input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const numbers = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const visited = Array(N).fill(false);

const set = new Set();

function DFS(arr) {
  if (arr.length === M) {
    set.add(arr.join(" "));
    return;
  }

  for (let i = 0; i < numbers.length; i++) {
    if (!visited[i]) {
      visited[i] = true;
      arr.push(numbers[i]);
      DFS(arr);
      // 백트래킹
      arr.pop();
      visited[i] = false;
    }
  }
}

DFS([]);
console.log([...set].join("\n"));
