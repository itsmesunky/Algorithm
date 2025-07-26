const solution = (maps) => {
    const n = maps.length; // 행 (세로)
    const m = maps[0].length; // 열 (가로)

    const dx = [1, -1, 0, 0]; // x축 이동 (오른쪽, 왼쪽)
    const dy = [0, 0, 1, -1]; // y축 이동 (아래, 위)

    const queue = [[0, 0, 1]];

    while (queue.length > 0) {
        const [x, y, dist] = queue.shift(); // 큐에서 현재 위치와 현재까지의 거리 꺼내기

        if (x === n - 1 && y === m - 1) {
            return dist;
        }

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i]; // 다음 x 좌표
            const ny = y + dy[i]; // 다음 y 좌표

            if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1) {
                maps[nx][ny] = dist + 1;
                queue.push([nx, ny, dist + 1]);
            }
        }
    }

    return -1;
}