const solution = (cost, hint) => {
    const n = cost.length;
    let answer = Number.MAX_SAFE_INTEGER;
    
    const dfs = (currStage, currHints, currCost) => {
        let newCost = 0;
        if(currHints[currStage]) {
            const hintCnt = Math.min(currHints[currStage], n - 1);
            newCost = cost[currStage][hintCnt];
            currHints[currStage] = 0;
        } else {
            newCost = cost[currStage][0];
        }
        
        currCost += newCost;
        
        if(currStage === n - 1) {
            answer = Math.min(answer, currCost);
            return;
        }
        
        const copiedHints = [...currHints];
        
        for(let i = 0; i < 2; i++) {
            if(i === 0) { // 해당 스테이지에서 힌트 번들 구매한 경우
                const hints = hint[currStage];
                for(let j = 1; j < hints.length; j++) {
                    copiedHints[hints[j] - 1]++;
                }
                dfs(currStage + 1, copiedHints, currCost + hints[0]);
            } else { // 해당 스테이지에서 힌트 번들 구매하지 않은 경우
                dfs(currStage + 1, [...currHints], currCost);
            }
        }
        
        currCost -= newCost;
    }
    
    const hints = Array(n).fill(0);
    dfs(0, [...hints], 0);
    
    return answer;
}