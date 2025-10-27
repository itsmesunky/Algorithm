/**
* 문제 해결 시나리오
* 1. 최대 몇 명까지 징검다리를 건널 수 있는지 이분 탐색으로 찾으면 됨
* 2. 최소 1명, 최대 2억명
*/
const solution = (stones, k) => {
    let answer = 0;
    let left = 0;
    let right = 200_000_000;
    
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        let skip = 0;
        let canCross = true;
        
        for(const stone of stones) {
            if(stone - mid < 0) {
                skip += 1;
                if(k <= skip) {
                    canCross = false;
                    break;
                }
            } else {
                skip = 0;
            }
        }
        
        if(canCross) {
            left = mid + 1;
            answer = mid;
        } else {
            right = mid - 1;
        }
    }
    
    return answer;
}