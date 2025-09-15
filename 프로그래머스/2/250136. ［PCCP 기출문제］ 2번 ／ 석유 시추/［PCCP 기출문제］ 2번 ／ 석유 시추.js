function solution(land) {
    const R = land.length;
    const C = land[0].length;
    const visited = Array.from({ length: R }, () => Array(C).fill(false));
    const colsTotal = Array(C).fill(0);

    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            if (land[r][c] === 1 && !visited[r][c]) {
                const queue = [[r, c]];
                visited[r][c] = true;
                let oilCount = 1;
                const affectedCols = new Set([c]);

                let head = 0;
                while (head < queue.length) {
                    const [currR, currC] = queue[head++];

                    for (let i = 0; i < 4; i++) {
                        const nextR = currR + dx[i];
                        const nextC = currC + dy[i];

                        if (nextR >= 0 && nextR < R && nextC >= 0 && nextC < C) {
                            if (land[nextR][nextC] === 1 && !visited[nextR][nextC]) {
                                visited[nextR][nextC] = true;
                                queue.push([nextR, nextC]);
                                oilCount++;
                                affectedCols.add(nextC);
                            }
                        }
                    }
                }

                // 탐색이 끝난 후, 해당 덩어리가 포함된 열에 석유량 추가
                for (const col of affectedCols) {
                    colsTotal[col] += oilCount;
                }
            }
        }
    }

    // 모든 열을 탐색한 후, 최대 석유량을 반환
    const maxOil = Math.max(...colsTotal);
    return maxOil > 0 ? maxOil : 0;
}