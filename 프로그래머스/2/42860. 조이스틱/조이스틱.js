const solution = (name) => {
    let answer = 0;
    const len = name.length;

    // 1️⃣ 상하 이동 (알파벳 변경 최소 횟수)
    for (let i = 0; i < len; i++) {
        const charCode = name.charCodeAt(i);
        const up = charCode - 65; // 'A'에서 위로 이동
        const down = 91 - charCode; // 'Z'에서 아래로 이동 (91은 'Z'+1)
        answer += Math.min(up, down);
    }

    // 2️⃣ 좌우 이동 (커서 최소 이동)
    let move = len - 1; // 기본: 끝까지 가는 경우
    for (let i = 0; i < len; i++) {
        let next = i + 1;
        while (next < len && name[next] === "A") {
            next++;
        }
        // i 지점에서 뒤로 돌아가는 경우 고려
        move = Math.min(move, i + len - next + Math.min(i, len - next));
    }

    return answer + move;
};
