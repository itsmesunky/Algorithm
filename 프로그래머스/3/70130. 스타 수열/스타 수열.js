function solution(a) {
    const count = {};
    for (let v of a) count[v] = (count[v] || 0) + 1;

    let answer = 0;

    for (let v in count) {
        if (count[v] * 2 <= answer) continue;

        const target = Number(v);
        let pairs = 0;

        for (let i = 0; i < a.length - 1; i++) {
            if ((a[i] === target || a[i+1] === target) && a[i] !== a[i+1]) {
                pairs++;
                i++; // 바로 다음 인덱스는 사용 불가
            }
        }

        answer = Math.max(answer, pairs * 2);
    }

    return answer;
}
