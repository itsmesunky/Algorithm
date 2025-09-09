/**
* 문제 해결 시나리오
*/
const solution = (diffs, times, limit) => {
    /**
    * isTimeOver: 매개변수 level(숙련도)로 모든 퍼즐을 풀었을 때 시간 초과인지 아닌지 판별해주는 함수
    * @param(level) 숙련도
    */
    const isTimeOver = (level) => {
        let total = 0;
        
        for(let idx = 0; idx < diffs.length; idx++) {
            const diff = diffs[idx];
            const time_prev = times[idx - 1];
            const time_cur = times[idx];
            
            if(diff <= level) {
                total += time_cur;
            } else {
                const sum = time_cur + ((time_cur + time_prev) * (diff - level));
                total += sum;
            }

            if(total > limit) return true;
        }
        return false;
    }
    
    let lt = 1;
    let rt = Number.MAX_SAFE_INTEGER;
    let answer = rt;
    
    while(lt <= rt) {
        const mid = Math.floor((lt + rt) / 2);
        
        if(isTimeOver(mid)) {
            lt = mid + 1;
        } else {
            answer = mid;
            rt = mid - 1;
        }
    }
    
    return answer;
}