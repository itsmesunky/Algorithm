function solution(strArr) {
    let answer = 0;
    
    for(let i = 0; i < strArr.length; i++) {
        let strLength = strArr[i].length;
        let count = 1;
        
        for(let j = i + 1; j < strArr.length; j++) {
            if(strArr[j].length === strLength) {
                count++;
            }
        }
        
        answer = Math.max(answer, count);
    }
    
    return answer;
}