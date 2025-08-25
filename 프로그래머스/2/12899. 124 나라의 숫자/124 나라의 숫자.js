const solution = (n) => {
    let answer = '';
    
    while(n > 0) {
        const num = n % 3;
        n = Math.floor(n / 3);
        
        // 1. 숫자를 3으로 나눈 나머지 값에 따라 분기 처리
        if(num === 0) { // 2.1 나머지가 0일 때
            answer = '4' + answer;
            n -= 1;
        } else { // 2.2 나머지가 0이 아닐 때
            answer = num.toString() + answer;
        }
    }
    
    return answer;
}