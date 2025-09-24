/**
* 문제 해결 시나리오
* 1. n개의 화살을 각 과녁에 어피치보다 1개 많게 배팅(DFS), 배팅 후에는 해당 과녁 0으로 초기화(백트래킹)
* 2. 모든 화살을 소진했다면 이전의 점수와 차이 비교
* 3. 점수차가 같다면 낮은 과녁 점수를 더 많이 맞춘 것으로 갱신
*/

/**
* getDiffScore: 어피치와 라이언의 점수 차이를 반환하는 함수
* @param(appeach): 어치피의 과녁판
* @param(ryan): 라이언의 과녁판
*/
const getDiffScore = (appeach, ryan) => {
    let appeachScore = 0, ryanScore = 0;
    
    appeach.forEach((score, idx) => {
        if(score < ryan[idx]) {
            ryanScore += 10 - idx
        } else if(score && score >= ryan[idx]) {
            appeachScore += 10 - idx;
        }
    });
    
    return ryanScore - appeachScore;
}

const solution = (n, info) => {
    // 점수 과녁 개수
    const len = 10;
    
    // 어피치와 라이언의 최대 점수차
    let maxDiff = 0;
    
    // 라이언 과녁판
    const ryanInfo = Array(11).fill(0);
    
    // 라이언 점수 과녁 기록
    let result = [-1];
    
    /**
    * dfs: 10 ~ 0점까지의 각 과녁판에 어피치보다 1개 많게 갱신 시뮬레이션 후, 백트래킹
    * @param(left): 남은 화살 수
    * @param(idx): 점수 과녁
    */
    const dfs = (left, idx) => {
        if(!left || idx === len) { // 남은 화살이 없는 경우
            if(left) {
                ryanInfo[idx] += left;
            }
            // 점수 차이 비교
            const diff = getDiffScore(info, [...ryanInfo]);
            if(maxDiff < diff) {
                maxDiff = diff;
                result = [...ryanInfo];
            } else if(maxDiff === diff) {
                // 점수 차이가 이전과 같은 경우, 낮은 점수 과녁 값 비교
                for(let i = len; i >= 0; i--) {
                    if(ryanInfo[i] > result[i]) {
                        result = [...ryanInfo];
                        break;
                    } else if(result[i] > ryanInfo[i]) {
                        break;
                    }
                }
            }
            
            ryanInfo[idx] -= left;
            return;
        } else {
            // 해당 과녁판에서 라이언이 점수를 얻기 위해 필요한 화살 수
            const arrowToWin = info[idx] + 1;
            if(left >= arrowToWin) {
                ryanInfo[idx] = arrowToWin;
                dfs(left - arrowToWin, idx + 1);
                // 백트래킹
                ryanInfo[idx] = 0;
            }
            // 백트래킹
            ryanInfo[idx] = 0;
            dfs(left, idx + 1);
        }
    }
    
    dfs(n, 0);
    
    return maxDiff ? result : [-1];
}