const solution = (arr, k) => {
    let answer = [...new Set(arr)];
    
    while(answer.length < k) {
        answer.push(-1);
    }
    
    return answer.slice(0, k);
}