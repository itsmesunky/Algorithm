const input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

let T = parseInt(input.shift());

const commands = ["D", "S", "L", "R"];

function computeAndParse(str, command) {
  const number = parseInt(str);
  switch (command) {
    case "D":
      return String((number * 2) % 10000).padStart(4, "0");
    case "S":
      return number === 0 ? "9999" : String(number - 1).padStart(4, "0");
    case "L":
      return str.substring(1) + str.substring(0, 1);
    case "R":
      return str.substring(3) + str.substring(0, 3);
  }
}

const results = [];

while (T--) {
  const [A, B] = input
    .shift()
    .split(" ")
    .map((value, i) => (i ? +value : value.padStart(4, "0")));

  let head = 0;
  const queue = [[A, ""]];

  const visited = Array(10000).fill(false);
  visited[+A] = true;

  while (head < queue.length) {
    const [currStr, currCommand] = queue[head++];
    const number = parseInt(currStr);

    if (number === B) {
      results.push(currCommand);
      break;
    }

    let find = false;

    for (const command of commands) {
      const result = computeAndParse(currStr, command);
      if (!visited[+result]) {
        visited[+result] = true;
        if (+result === B) {
          find = true;
          results.push(currCommand + command);
          break;
        }
        queue.push([result, currCommand + command]);
      }
    }

    if (find) break;
  }
}

console.log(results.join("\n"));
