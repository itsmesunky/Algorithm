function solution(n) {
    let answer = 0;
    
    // 배열 생성
    const assendSortedArray = Array.from({length: n}, (_, idx) => idx + 1);
    const decendSortedArray = Array.from({length: n}, (_, idx) => n - idx);
    
    // 포인터 생성
    let pointer = 0;
    
    for(let i = 0; i < assendSortedArray.length; i++) {
        for(let j = pointer; j < decendSortedArray.length; j++) {
            if(assendSortedArray[i] * decendSortedArray[j] === n) {
                answer++;
                pointer = j;
                break;
            }
        }
    }
    
    return answer;
    
}