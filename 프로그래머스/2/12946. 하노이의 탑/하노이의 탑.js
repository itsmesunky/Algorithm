/**
 * @param {number} n 옮겨야 할 원판의 개수
 * @param {number} from 출발지 기둥
 * @param {number} to 목적지 기둥
 * @param {number} via 보조 기둥
 * @param {number[][]} moves 이동 경로를 저장할 배열
 */
function hanoi(n, from, to, via, moves) {
    // 재귀의 종료 조건: 원판이 1개일 때
    if (n === 1) {
        moves.push([from, to]);
        return;
    }

    // 1. n-1개의 원판을 출발지(from)에서 보조(via)로 이동
    hanoi(n - 1, from, via, to, moves);

    // 2. 가장 큰 n번째 원판을 출발지(from)에서 목적지(to)로 이동
    moves.push([from, to]);

    // 3. n-1개의 원판을 보조(via)에서 목적지(to)로 이동
    hanoi(n - 1, via, to, from, moves);
}

function solution(n) {
    const moves = [];
    // 1, 2, 3은 문제에서 제시된 기둥 번호
    hanoi(n, 1, 3, 2, moves);
    return moves;
}