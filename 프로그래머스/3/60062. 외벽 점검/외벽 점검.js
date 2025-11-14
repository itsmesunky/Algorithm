/**
 * 프로그래머스 레벨 3: 외벽 점검
 * @param {number} n 외벽의 길이
 * @param {number[]} weak 취약 지점의 위치가 담긴 배열
 * @param {number[]} dist 각 친구가 1시간 동안 이동할 수 있는 거리가 담긴 배열
 * @returns {number} 취약 지점을 점검하기 위해 보내야 하는 친구 수의 최소값, 불가능할 경우 -1
 */
function solution(n, weak, dist) {
    const WEAK_LEN = weak.length;
    // 1. 원형 구조를 선형화 (2배 길이의 배열 생성)
    // 반시계 방향으로 시작하는 경우를 시계 방향 한 바퀴로 확장하여 처리
    const linearWeak = new Array(WEAK_LEN * 2 - 1).fill(0);
    for (let i = 0; i < WEAK_LEN * 2 - 1; i++) {
        linearWeak[i] = i < WEAK_LEN ? weak[i] : weak[i - WEAK_LEN] + n;
    }

    // 최소 친구 수를 저장할 변수 (최대 친구 수 + 1로 초기화)
    let minFriends = dist.length + 1;

    // 친구들의 이동 거리를 내림차순 정렬 (먼저 투입하는 친구가 멀리 갈수록 유리하므로)
    dist.sort((a, b) => b - a);

    // 2. 1명부터 dist.length명까지 친구 수를 늘려가며 확인
    for (let friendsCount = 1; friendsCount <= dist.length; friendsCount++) {
        // 현재 friendsCount 명의 친구들로 만들 수 있는 모든 순열을 구함
        const permutations = getPermutation(dist, friendsCount);

        // 생성된 모든 순열에 대해 탐색
        for (const p of permutations) {
            // 3. 모든 시작 지점(weak의 각 요소)에서 점검 가능 여부 확인
            for (let start = 0; start < WEAK_LEN; start++) {
                // 현재 시작점에서 WEAK_LEN 길이만큼의 취약 지점 라인 선택
                let line = linearWeak.slice(start, start + WEAK_LEN);
                
                let remainingWeak = [...line]; // 점검해야 할 취약 지점 복사

                // 순열에 따라 친구들을 차례로 투입
                for (const d of p) {
                    // 첫 번째 취약 지점에서 시작하여 친구의 커버리지 계산
                    const coverage = remainingWeak[0] + d; 
                    
                    // 커버리지 안에 있는 취약 지점들을 제거
                    remainingWeak = remainingWeak.filter(e => e > coverage);
                    
                    // 모든 취약 지점을 점검 완료했다면 (배열이 비었다면)
                    if (remainingWeak.length === 0) {
                        minFriends = Math.min(minFriends, friendsCount);
                        break; // 현재 순열로는 이 이상 더 적은 친구를 쓸 수 없으므로 다음 시작점으로
                    }
                }
            }
            // 현재 friendsCount로 점검 가능함을 찾았으므로 더 이상의 순열 탐색은 불필요
            if (minFriends <= friendsCount) break; 
        }
        // 이미 최소 친구 수를 찾았다면, 더 많은 친구를 쓰는 경우의 수는 볼 필요 없음
        if (minFriends <= friendsCount) return minFriends; 
    }

    // 최소 친구 수가 초기값 그대로라면 모두 투입해도 불가능한 경우
    return minFriends > dist.length ? -1 : minFriends;
}

// 순열을 구하는 함수 (재귀를 이용)
const getPermutation = (arr, n) => {
    if (n === 1) return arr.map(el => [el]);
    const result = [];

    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
        const perms = getPermutation(rest, n - 1);
        const attached = perms.map(perm => [fixed, ...perm]);
        result.push(...attached);
    });

    return result;
};

// 예시: solution(12, [1, 5, 6, 10], [1, 2, 3, 4]); // 결과: 2