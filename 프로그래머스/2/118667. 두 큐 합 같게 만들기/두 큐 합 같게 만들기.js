const solution = (queue1, queue2) => {
    // 배열 합치기
    const joined = [...queue1, ...queue2];
    
    // 모든 원소의 합
    const allSum = joined.reduce((acc, cur) => cur += acc, 0);
    
    // 모든 원소의 합이 홀수인 경우 두 개의 큐로 나눌 수 없으므로 -1을 반환
    if(allSum % 2 !== 0) return -1;
    
    const goal = allSum / 2;
    
    // 초기 합: 큐1 원소의 합
    let sum = queue1.reduce((acc, cur) => cur += acc, 0);
    
    let count = 0;
    let startIdx = 0;
    let endIdx = queue1.length;
    
    const limit = joined.length * 2;
    
    while(count < limit && startIdx < joined.length && endIdx < joined.length) {
        if(sum < goal) {
            sum += joined[endIdx++];
        } else if(sum > goal) {
            sum -= joined[startIdx++];
        } else {
            return count;
        }
        
        count++;
    }
    
    return -1;
}