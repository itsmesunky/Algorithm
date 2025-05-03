function solution(myString, pat) {
    let newStr = "";
    let answer = 0;
    
    for(const char of myString) {
        newStr += char;
        
        if(newStr.endsWith(pat)) {
            answer++;
        }
    }
    
    return answer;
}