function solution(arr) {
    let num = 1;
    
    while(num < arr.length) {
        num *= 2;
    }
    
    while(arr.length < num) {
        arr.push(0);
    }
    
    return arr;
}