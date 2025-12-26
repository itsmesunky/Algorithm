const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const N = parseInt(input[0]);
// 오름차순 정렬 (숫자 정렬을 위해 b - a 사용)
const liquids = input[1].split(' ').map(Number).sort((a, b) => a - b);

let minAbsSum = Infinity;
let result = [];

// 하나를 고정하고 나머지 둘을 투 포인터로 찾음
for (let i = 0; i < N - 2; i++) {
    let left = i + 1;
    let right = N - 1;

    while (left < right) {
        const sum = liquids[i] + liquids[left] + liquids[right];
        const absSum = Math.abs(sum);

        // 최솟값 갱신
        if (absSum < minAbsSum) {
            minAbsSum = absSum;
            result = [liquids[i], liquids[left], liquids[right]];
        }

        if (sum === 0) {
            // 0을 찾으면 즉시 종료 가능
            console.log(result.join(' '));
            process.exit();
        } else if (sum < 0) {
            left++;
        } else {
            right--;
        }
    }
}

console.log(result.join(' '));