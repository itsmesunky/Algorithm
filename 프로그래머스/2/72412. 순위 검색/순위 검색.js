const solution = (info, queries) => {
    const combineScoreMap = new Map();
    
    const seperateString = (str) => {
        const strArr = str.replaceAll("and ", "").split(" ");
        const score = Number(strArr.pop());
        return [strArr, score];
    }
    
    const binarySearch = (arr, number) => {
        // lower-bound
        let lt = 0;
        let rt = arr.length;
        
        while(lt < rt) {
            const mid = Math.floor((lt + rt) / 2);
            
            if(arr[mid] < number) {
                lt = mid + 1;
            } else if(number <= arr[mid]) {
                rt = mid;
            }
        }
        
        return lt;
    }
    
    const setCombineScore = (str) => {
        const [strArr, score] = seperateString(str);
        
        for(let i = 0; i < 1 << 4; i++) {
            const combine = [];
            for(let j = 0; j < 4; j++) {
                if(i & 1 << j) combine[j] = strArr[j];
                else combine[j] = "-";
            }
            
            const key = combine.join(" ");
            if(!combineScoreMap.has(key)) {
                combineScoreMap.set(key, []);
            }
            
            combineScoreMap.get(key).push(score);
        }
    }
    
    for(const str of info) {
        setCombineScore(str);
    }
    
    for(const [key, scores] of combineScoreMap) {
        scores.sort((a, b) => a - b);
    }
    
    const result = [];
    for(const query of queries) {
        const [strArr, score] = seperateString(query);
        const key = strArr.join(" ");
        
        const arr = combineScoreMap.get(key);
        
        if(arr) {
            const length = arr.length;
            result.push(length - binarySearch(arr, score))
        } else {
            result.push(0);
        }
    }
    
    return result;
}