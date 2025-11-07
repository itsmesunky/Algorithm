const solution = (n, k, cmd) => {
    // prev[i] = i의 윗 행 인덱스
    // next[i] = i의 아랫 행 인덱스
    const prev = Array(n).fill(0).map((_, i) => i - 1);
    const next = Array(n).fill(0).map((_, i) => i + 1);
    next[n - 1] = -1; // 마지막 행의 다음은 없음

    const deleted = []; // 삭제된 행 저장 (스택)
    let cur = k;        // 현재 선택된 행

    for (let c of cmd) {
        const [op, x] = c.split(" ");

        if (op === "U") {
            let cnt = Number(x);
            while (cnt--) cur = prev[cur];
        }

        else if (op === "D") {
            let cnt = Number(x);
            while (cnt--) cur = next[cur];
        }

        else if (op === "C") {
            deleted.push([cur, prev[cur], next[cur]]); // 현재 행 저장

            // 현재 행 삭제 처리
            if (prev[cur] !== -1) next[prev[cur]] = next[cur];
            if (next[cur] !== -1) prev[next[cur]] = prev[cur];

            // 다음 행 선택 (없으면 윗 행 선택)
            cur = (next[cur] !== -1) ? next[cur] : prev[cur];
        }

        else if (op === "Z") {
            const [idx, p, n2] = deleted.pop();

            // 복구
            if (p !== -1) next[p] = idx;
            if (n2 !== -1) prev[n2] = idx;
        }
    }

    // 최종 문자열 생성
    const result = Array(n).fill("O");
    for (const [idx] of deleted) result[idx] = "X";

    return result.join("");
};
