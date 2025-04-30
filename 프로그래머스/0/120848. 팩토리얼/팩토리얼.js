function solution(n) {
    let answer = 2;
    let multiple = 1;
    
    while(n >= multiple) {
        multiple *= answer;
        
        if(multiple > n) {
            return answer - 1;
        } else {
            answer++;
        }
    }
    
    return answer;
}