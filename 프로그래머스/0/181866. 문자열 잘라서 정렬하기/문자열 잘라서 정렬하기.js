function solution(myString) {
    let answer = myString.split("x").filter(item => item.length !== 0);
    return answer.sort();
}