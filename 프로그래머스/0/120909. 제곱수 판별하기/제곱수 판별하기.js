function solution(n) {
    let number = 1;
    
    while(true) {
        if(Math.pow(number, 2) > n) {
            return 2;
        }
        
        if(Math.pow(number, 2) == n) {
            return 1;
        }
        number++;
    }
}