function solution(my_string, m, c) {
    let result = "";
    for(let i = c; i <= my_string.length; i = i + m) {
        result += my_string.charAt(i-1);
    }
    return result;
}