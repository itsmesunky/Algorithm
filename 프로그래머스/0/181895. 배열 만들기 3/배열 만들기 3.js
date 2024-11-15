function solution(arr, intervals) {
    let answer = [];
    let pos = 0;
    
    for(let i = 0; i < intervals.length; i++) {
        for(let j = intervals[i][0]; j <= intervals[i][1]; j++) {
            answer[pos++] = arr[j];
        }
    }
    
    return answer;
}