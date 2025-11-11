function solution(n, m, x, y, r, c, k) {
    const dist = Math.abs(r - x) + Math.abs(c - y);
    if (dist > k || (k - dist) % 2 === 1) return "impossible";

    let answer = "";
    let cx = x, cy = y;

    const dirs = [
        ['d', 1, 0],
        ['l', 0, -1],
        ['r', 0, 1],
        ['u', -1, 0],
    ];

    for (let step = 0; step < k; step++) {
        for (const [ch, dx, dy] of dirs) {
            const nx = cx + dx;
            const ny = cy + dy;

            if (nx < 1 || ny < 1 || nx > n || ny > m) continue;

            const remaining = k - (step + 1);
            const distToTarget = Math.abs(r - nx) + Math.abs(c - ny);

            if (remaining < distToTarget) continue;
            if ((remaining - distToTarget) % 2 !== 0) continue;

            answer += ch;
            cx = nx;
            cy = ny;
            break;
        }
    }

    return answer;
}