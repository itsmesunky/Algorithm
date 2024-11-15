function solution(n) {
    let numArr = [n];
    let num = n;
    
    while(1 < num) {
        if(num % 2 == 0) {
            num /= 2;
            numArr.push(num);
        } else {
            num = num * 3 + 1;
            numArr.push(num);
        }
    }
    
    return numArr;
}