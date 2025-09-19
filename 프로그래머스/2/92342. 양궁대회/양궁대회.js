function solution(n, info) {
    let maxDiff = 0;
    let bestResult = [-1];
    const ryanShots = Array(11).fill(0);

    function calcScore(ryan, apeach) {
        let ryanScore = 0;
        let apeachScore = 0;
        for (let i = 0; i < 11; i++) {
            if (ryan[i] > apeach[i]) {
                ryanScore += (10 - i);
            } else if (apeach[i] > 0) {
                apeachScore += (10 - i);
            }
        }
        return ryanScore - apeachScore;
    }
    
    function dfs(idx, arrowsLeft) {
        if (arrowsLeft === 0 || idx === 11) {
            if (arrowsLeft > 0) {
                ryanShots[10] += arrowsLeft;
            }

            const diff = calcScore(ryanShots, info);
            
            if (diff > maxDiff) {
                maxDiff = diff;
                bestResult = [...ryanShots];
            } else if (diff > 0 && diff === maxDiff) {
                for (let i = 10; i >= 0; i--) {
                    if (ryanShots[i] > bestResult[i]) {
                        bestResult = [...ryanShots];
                        break;
                    } else if (bestResult[i] > ryanShots[i]) {
                        break;
                    }
                }
            }

            if (arrowsLeft > 0) {
                ryanShots[10] -= arrowsLeft;
            }
            return;
        }

        const arrowsToWin = info[idx] + 1;
        if (arrowsLeft >= arrowsToWin) {
            ryanShots[idx] = arrowsToWin;
            dfs(idx + 1, arrowsLeft - arrowsToWin);
            ryanShots[idx] = 0;
        }

        ryanShots[idx] = 0;
        dfs(idx + 1, arrowsLeft);
    }

    dfs(0, n);
    
    return maxDiff > 0 ? bestResult : [-1];
}