const solution = (begin, end) => {
    const result = [];

    for (let n = begin; n <= end; n++) {
        if (n === 1) { // 1번 블록은 항상 0
            result.push(0);
            continue;
        }

        let block = 1; // 기본값

        // √n 까지만 탐색
        for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) {
                // 큰 약수를 선택해야 하므로 몫 사용
                const divisor = n / i;

                if (divisor <= 10_000_000) {
                    block = divisor;
                    break; // 가장 큰 값 찾으면 종료
                } else {
                    block = i; // 몫이 너무 크면 작은 쪽을 채택
                }
            }
        }

        result.push(block);
    }

    return result;
};
