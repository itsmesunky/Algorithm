const solution = (n, k) => {
    const answer = [];
    
    const numbers = Array.from({length: n}, (_, i) => i + 1);
    
    // 순열 계산을 위한 팩토리얼 미리 정의
    const factorial = [1];
    for(let i = 1; i < n; i++) {
        factorial[i] = factorial[i - 1] * i;
    }
    
    // 0-Based 인덱싱을 위해 k값 감소 처리
    k--;
    
    for(let i = n; i > 0; i--) {
        // k번째 수가 몇 번째 순열에 있는지 확인
        const idx = Math.floor(k / factorial[i - 1]);
        answer.push(numbers[idx]);
        
        // 해당 수 제거
        numbers.splice(idx, 1);
        
        k %= factorial[i - 1];
    }
    
    return answer;
}