function solution(weights) {
    let answer = 0;
    const map = new Map();

    // 1. 각 무게별 사람의 수를 해시 맵에 저장
    for (const weight of weights) {
        map.set(weight, (map.get(weight) || 0) + 1);
    }

    // 2. 해시 맵을 순회하며 짝꿍을 찾고 계산
    for (const [weight, count] of map) {
        // 2-1. 같은 무게를 가진 사람들끼리의 짝꿍 (1:1 비율)
        // 같은 무게를 가진 사람이 2명 이상일 때 조합의 수 계산 (nC2)
        if (count >= 2) {
            answer += count * (count - 1) / 2;
        }

        // 2-2. 다른 무게를 가진 사람들끼리의 짝꿍
        const possiblePairs = [
            (weight * 2) / 3, // 2:3 비율
            (weight * 2) / 4, // 2:4 (1:2) 비율
            (weight * 3) / 4  // 3:4 비율
        ];

        for (const pairWeight of possiblePairs) {
            // 무게가 정수이고, 해시 맵에 해당 무게가 존재하면 짝꿍 계산
            if (Number.isInteger(pairWeight) && map.has(pairWeight)) {
                answer += count * map.get(pairWeight);
            }
        }
    }

    return answer;
}