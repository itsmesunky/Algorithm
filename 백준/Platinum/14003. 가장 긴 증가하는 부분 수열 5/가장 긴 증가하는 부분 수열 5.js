const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = parseInt(input[0]);
const arr = input[1].split(' ').map(Number);

function solve() {
    if (n === 0) return;

    // tails[i]는 길이가 i+1인 증가하는 부분 수열의 마지막 값 중 최소값을 저장
    const tails = [];
    // indices[i]는 arr[i]가 tails의 어느 인덱스에 들어갔는지 저장 (역추적용)
    const indices = new Array(n);

    // 이분 탐색: target이 들어갈 위치(Lower Bound)를 찾음
    function lowerBound(target) {
        let left = 0;
        let right = tails.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (tails[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return left;
    }

    for (let i = 0; i < n; i++) {
        const num = arr[i];
        if (tails.length === 0 || tails[tails.length - 1] < num) {
            indices[i] = tails.length;
            tails.push(num);
        } else {
            const pos = lowerBound(num);
            tails[pos] = num;
            indices[i] = pos;
        }
    }

    // 1. LIS 길이 출력
    const lisLength = tails.length;
    console.log(lisLength);

    // 2. 역추적을 통한 실제 수열 구하기
    const result = [];
    let targetIdx = lisLength - 1;
    for (let i = n - 1; i >= 0; i--) {
        if (indices[i] === targetIdx) {
            result.push(arr[i]);
            targetIdx--;
        }
    }

    // 뒤집어서 출력
    console.log(result.reverse().join(' '));
}

solve();