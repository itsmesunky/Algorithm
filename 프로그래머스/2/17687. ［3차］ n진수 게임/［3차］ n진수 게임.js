const solution = (n, t, m, p) => {
    let answer = "";
    let str = "";
    let num = 0;
    
    while(str.length < t * m) {
        str += num.toString(n).toUpperCase();
        num++;
    }
    
    for(let i = p - 1; answer.length < t; i += m) {
        answer += str[i];
    }
    
    return answer;
}