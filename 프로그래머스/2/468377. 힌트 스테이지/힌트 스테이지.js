const solution = (cost, hint) => {
    let answer = Number.MAX_SAFE_INTEGER;
    
    // 총 스테이지 수
    const stages = cost.length;

    /**
    * getMinCost - 가능한 조합들을 DFS + 백트래킹으로 모두 탐색
    * @param {number} currStage - 진행중인 단계(0-indexed)
    * @param {number}[] currHints - 구매한 힌트들의 남은 개수
    * @param {number} currCost - 현재까지 사용한 비용
    */
    const getMinCost = (currStage, currHints, currCost) => {
        let newCost = 0;
        
        if(currHints[currStage]) { // 현재 스테이지에 해당하는 힌트가 존재하는 경우
            // ⚠️ 하나의 스테이지에서 사용할 수 있는 힌트권의 최대 개수는 n-1개
            const hintCnt = Math.min(currHints[currStage], stages - 1);
            newCost = cost[currStage][hintCnt];
            currHints[currStage] = 0;
        } else { // 현재 스테이지에 해당하는 힌트가 존재하지 않는 경우
            newCost = cost[currStage][0];
        }
        
        currCost += newCost;
        
        // 현재 스테이지가 마지막 스테이지라면 answer를 더 작은 값으로 갱신 후 종료
        if(currStage === stages - 1) {
            answer = Math.min(answer, currCost);
            return;
        }
        
        // 해당 스테이지에서 힌트 번들 구매하는 경우
        const hints = hint[currStage];
        const copiedHints = [...currHints];
        for(let i = 1; i < hints.length; i++) {
            copiedHints[hints[i] - 1]++;
        }
        getMinCost(currStage + 1, [...copiedHints], currCost + hints[0]);
        
        // 해당 스테이지에서 힌트 번들 구매하지 않는 경우
        getMinCost(currStage + 1, currHints, currCost);
        
        // 백트래킹
        currCost -= newCost;
    }
    
    getMinCost(0, [...Array(stages).fill(0)], 0);
    return answer;
}