const solution = (n, k) => {
    let answer = [];
    let numbers = Array.from({length: n}, (_, i) => i + 1);
    let factorial = [1];
    
    // n-1까지의 팩토리얼 값 미리 계산
    for(let i = 1; i < n; i++) {
        factorial[i] = factorial[i - 1] * i;
    }
    
    // k를 1부터 시작하는 인덱스로 조정
    k--; 
    
    for(let i = n; i >= 1; i--) {
        const index = Math.floor(k / factorial[i - 1]);
        answer.push(numbers[index]);
        
        // 사용한 숫자는 제거
        numbers.splice(index, 1); 
        
        // k 값 업데이트
        k %= factorial[i - 1];
    }
    
    return answer;
}