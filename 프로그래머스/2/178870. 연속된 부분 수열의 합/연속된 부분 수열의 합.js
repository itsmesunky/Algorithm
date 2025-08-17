const solution = (sequence, k) => {
    const answer = [];
    
    if(sequence[0] === k) {
        return [0, 0];
    }
    
    // 투 포인터
    let startIdx = 0, endIdx = 1;
    
    // 부분 수열의 합
    let sum = sequence[startIdx] + sequence[endIdx];
    
    while(startIdx <= endIdx && endIdx < sequence.length) {
        if(sum < k) {
            sum += sequence[++endIdx];
        } else if(sum > k) {
            sum -= sequence[startIdx++];
        } else {
            answer.push([startIdx, endIdx]);
            sum -= sequence[startIdx++];
            sum += sequence[++endIdx];
        }
    }
    
    return answer.sort((a, b) => (a[1] - a[0]) - (b[1] - b[0]))[0];
}
