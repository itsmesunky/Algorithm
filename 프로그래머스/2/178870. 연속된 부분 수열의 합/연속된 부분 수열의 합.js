const solution = (sequence, k) => {
    let start = 0, sum = 0;
    let answer = [0, sequence.length - 1]; // 기본값 (최대 구간)
    
    for (let end = 0; end < sequence.length; end++) {
        sum += sequence[end];
        
        while (sum > k) {
            sum -= sequence[start++];
        }
        
        if (sum === k) {
            if ((end - start) < (answer[1] - answer[0])) {
                answer = [start, end];
            }
        }
    }
    
    return answer;
};