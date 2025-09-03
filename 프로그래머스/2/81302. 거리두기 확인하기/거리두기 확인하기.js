/**
 * @param {string[]} place
 * @return {number}
 */
const checkDistancing = (place) => {
    const places = place.map(row => row.split(''));

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (places[i][j] === 'P') {
                // 상하좌우 탐색 (거리 1)
                const dx = [1, 0, -1, 0];
                const dy = [0, 1, 0, -1];
                for (let k = 0; k < 4; k++) {
                    const nx = i + dx[k];
                    const ny = j + dy[k];

                    if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5 && places[nx][ny] === 'P') {
                        return 0; // 거리가 1인 P 발견
                    }
                }

                // 상하좌우 거리 2 탐색
                const dx2 = [2, 0, -2, 0];
                const dy2 = [0, 2, 0, -2];
                for (let k = 0; k < 4; k++) {
                    const nx = i + dx2[k];
                    const ny = j + dy2[k];

                    if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5 && places[nx][ny] === 'P') {
                        const betweenX = i + dx[k];
                        const betweenY = j + dy[k];
                        if (places[betweenX][betweenY] !== 'X') {
                            return 0; // 거리가 2이고 파티션이 없는 경우
                        }
                    }
                }

                // 대각선 거리 2 탐색
                const d_diag_x = [1, 1, -1, -1];
                const d_diag_y = [1, -1, 1, -1];
                for (let k = 0; k < 4; k++) {
                    const nx = i + d_diag_x[k];
                    const ny = j + d_diag_y[k];

                    if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5 && places[nx][ny] === 'P') {
                        if (places[i][ny] !== 'X' || places[nx][j] !== 'X') {
                            return 0; // 대각선 거리가 2인데 양쪽 파티션 중 하나라도 없으면 위반
                        }
                    }
                }
            }
        }
    }
    return 1;
}

function solution(places) {
    return places.map(checkDistancing);
}