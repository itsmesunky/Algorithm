function solution(my_string) {
    let answer = [];
    for(let i = 0; i < my_string.length; i++) {
        answer[i] = my_string.substring(i);
    }
    return answer.sort();
}