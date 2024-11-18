function solution(a, d, included) {
    let result = 0;
    let arr = [];
    
    for(let i = 0; i < included.length; i++) {
        arr.push(a);
        a += d;
    }
    
    for(let i = 0; i < arr.length; i++) {
        if(included[i]) {
            result += arr[i];
        }
    }
    
    return result;
}