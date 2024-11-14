function solution(a, b) {
    let num1 = a.toString().concat(b.toString());
    let num2 = b.toString().concat(a.toString());
    let answer = 0;
    
    if(num1 !== num2) {
        return Math.max(num1, num2);
    } else {
        return Number(num1);
    }
    
}