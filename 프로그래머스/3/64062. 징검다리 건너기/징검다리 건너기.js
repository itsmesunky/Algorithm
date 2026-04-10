const solution = (stones, k) => {
    let answer = 0;
    let lt = 1, rt = 200_000_000;
    
    while(lt <= rt) {
        const mid = Math.floor((lt + rt) / 2)
        let skip = 0;
        let canCross = true;
        
        for(const stone of stones) {
            if(stone - mid < 0) {
                if(++skip === k) {
                    canCross = false;
                    break;
                }
            } else {
                skip = 0;
            }
        }
        
        if(canCross) {
            answer = mid;
            lt = mid + 1;
        } else {
            rt = mid - 1;
        }
    }
    
    return answer;
}