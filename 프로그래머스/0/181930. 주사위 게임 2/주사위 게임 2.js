function solution(a, b, c) {
    const numbers = [a, b, c];
    let count = 0;
    let answer = 0;
    
    for(let i = 0; i < 2; i++) {
        for(let j = i + 1; j <= 2; j++) {
            if(numbers[i] == numbers[j]) {
                count++;
            }
        }
    }
    
    switch(count) {
        case 0:
            numbers.map((number) => answer = answer + number);
            break;
        case 1:
            answer = (a+b+c) * (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2));
            break;
        case 3:
            answer = (a+b+c) * (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2)) * (Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3))
            break;
    }
    
    return answer;
}