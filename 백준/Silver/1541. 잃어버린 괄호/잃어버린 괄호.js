const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const groups = input.split('-').map(g => g.split('+').reduce((a,b)=>a+Number(b),0));

let answer = groups[0];
for (let i = 1; i < groups.length; i++) {
  answer -= groups[i];
}

console.log(answer);
