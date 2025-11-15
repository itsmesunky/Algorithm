const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let N = parseInt(input);
let answer = 0;
while(N >= 0) {
    if(N % 5 === 0) {
        answer += N / 5;
        console.log(answer);
        return;
    }
    
    N -= 3;
    answer++;
}

console.log(-1);