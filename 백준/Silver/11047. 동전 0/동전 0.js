const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// 준규가 가지고 있는 동전 종류 수, 만들고자 하는 값
const [N, K] = input[0].split(' ').map(Number);

// 동전 가치를 가리킬 포인터
let pointer = N;

// 현재 남은 값
let rest = K;

let answer = 0;

while(rest > 0) {
    const quotient = Math.floor(rest / input[pointer]);
    if(quotient) { // 현재 동전 가치로 남은 값을 만들 수 있는 경우
        answer += quotient;
        rest %= input[pointer];
    }
    
    pointer--;
}

console.log(answer);