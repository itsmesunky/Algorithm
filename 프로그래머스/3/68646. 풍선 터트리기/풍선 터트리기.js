function solution(a) {
    const n = a.length;
    const leftMin = Array(n).fill(Infinity);
    const rightMin = Array(n).fill(Infinity);

    for (let i = 1; i < n; i++) leftMin[i] = Math.min(leftMin[i - 1], a[i - 1]);
    for (let i = n - 2; i >= 0; i--) rightMin[i] = Math.min(rightMin[i + 1], a[i + 1]);

    let answer = 0;

    for (let i = 0; i < n; i++) {
        if (a[i] < leftMin[i] || a[i] < rightMin[i]) answer++;
    }
    return answer;
}
