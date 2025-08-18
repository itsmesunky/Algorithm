const solution = (storey) => {
    let answer = 0;

    while (storey > 0) {
        const num = storey % 10;
        const nextNum = (storey / 10) % 10;
        
        // 5를 초과하는 경우 또는 5이면서 다음 자리수가 5 이상인 경우 올림
        if (num > 5 || (num === 5 && nextNum >= 5)) {
            answer += 10 - num;
            storey = storey / 10 + 1; // 올림 처리
        } else {
            // 5 미만이거나 5이면서 다음 자리수가 5 미만인 경우 내림
            answer += num;
            storey = storey / 10; // 내림 처리
        }
        
        storey = Math.floor(storey);
    }
    
    return answer;
}