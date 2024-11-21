function solution(intStrs, k, s, l) {
    let result = [];
    
    intStrs.map((num) => {
        let number = 0;
        number = num.substring(s, (s+l));
        if(k < number) {
            result.push(Number(number));
        }
    })
    
    return result;
}