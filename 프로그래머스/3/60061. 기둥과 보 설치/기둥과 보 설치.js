function checkPillar(x, y, grid) {
    if (y === 0) {
        return true;
    }
    
    if (x > 0 && grid[x - 1][y][1] === 1) {
        return true;
    }
    if (grid[x][y][1] === 1) {
        return true;
    }
    
    if (y > 0 && grid[x][y - 1][0] === 1) {
        return true;
    }
    
    return false;
}

function checkBeam(x, y, grid) {
    if (y > 0 && grid[x][y - 1][0] === 1) {
        return true;
    }
    if (y > 0 && x < grid.length - 1 && grid[x + 1][y - 1][0] === 1) {
        return true;
    }

    if (x > 0 && x < grid.length - 2 && grid[x - 1][y][1] === 1 && grid[x + 1][y][1] === 1) {
        return true;
    }

    return false;
}

function solution(n, build_frame) {
    const grid = Array.from({ length: n + 1 }, () => 
        Array.from({ length: n + 1 }, () => [0, 0])
    );

    const isValid = () => {
        for (let x = 0; x <= n; x++) {
            for (let y = 0; y <= n; y++) {
                if (grid[x][y][0] === 1) {
                    if (!checkPillar(x, y, grid)) {
                        return false;
                    }
                }

                if (grid[x][y][1] === 1) {
                    if (!checkBeam(x, y, grid)) {
                        return false;
                    }
                }
            }
        }
        return true;
    };

    for (const frame of build_frame) {
        const [x, y, type, action] = frame;

        if (action === 1) {
            grid[x][y][type] = 1;
            if (!isValid()) {
                grid[x][y][type] = 0;
            }
        } else {
            grid[x][y][type] = 0;
            if (!isValid()) {
                grid[x][y][type] = 1;
            }
        }
    }

    const result = [];
    for (let x = 0; x <= n; x++) {
        for (let y = 0; y <= n; y++) {
            if (grid[x][y][0] === 1) {
                result.push([x, y, 0]);
            }
            if (grid[x][y][1] === 1) {
                result.push([x, y, 1]);
            }
        }
    }

    return result.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];
        if (a[1] !== b[1]) return a[1] - b[1];
        return a[2] - b[2];
    });
}