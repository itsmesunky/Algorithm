const solution = (elements) => {
    const len = elements.length;
    const circular = elements.concat(elements); // 원형 처리를 위해 두 번 이어붙임
    const set = new Set();

    for (let i = 1; i <= len; i++) { // 부분 수열 길이
        for (let start = 0; start < len; start++) { // 시작 인덱스
            const sum = circular.slice(start, start + i).reduce((acc, cur) => acc + cur, 0);
            set.add(sum);
        }
    }

    return set.size;
};
