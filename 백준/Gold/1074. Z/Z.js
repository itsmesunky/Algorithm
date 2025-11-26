const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let [N, r, c] = input;

let answer = 0;

while (N > 0) {
    const half = 1 << (N - 1); // 2^(N-1)
    const size = half * half;

    // 왼쪽 위
    if (r < half && c < half) {
        // 아무것도 더하지 않음
    }
    // 오른쪽 위
    else if (r < half && c >= half) {
        answer += size;
        c -= half;
    }
    // 왼쪽 아래
    else if (r >= half && c < half) {
        answer += size * 2;
        r -= half;
    }
    // 오른쪽 아래
    else {
        answer += size * 3;
        r -= half;
        c -= half;
    }

    N--;
}

console.log(answer);
