function solution(emergency) {
    let arr = [...emergency];
    let result = [];
    
    arr.sort( (a, b) => b - a );
    
    for(let i = 0; i < emergency.length; i++) {
        result.push(arr.indexOf(emergency[i]) + 1);
    }
    
    return result;
}