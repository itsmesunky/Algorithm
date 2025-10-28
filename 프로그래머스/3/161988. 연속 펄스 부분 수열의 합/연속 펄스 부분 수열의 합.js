const solution = (sequence) => {
    // 카데인 알고리즘으로 부분 수열의 최대합 구하기
    const getMaxSubArray = (init) => {
        let toggle = init;
        let currSum = 0, maxSum = 0;
        for(let i = 0; i < sequence.length; i++) {
            const value = sequence[i] * toggle;
            currSum = Math.max(currSum + value, value);
            maxSum = Math.max(currSum, maxSum);
            toggle *= -1;
        }
        return maxSum;
    }
    
    return Math.max(getMaxSubArray(1), getMaxSubArray(-1));
}