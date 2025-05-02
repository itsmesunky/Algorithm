function solution(str) {
    let element = "";
    let answer = [];
    
    for(const char of str) {
        switch(char) {
            case "a": case "b": case "c":
                if(element) {
                answer.push(element);
                    element = "";
                }
                break;
            default:
                element += char;
                break;
        }
    }
    
    if(element) {
        answer.push(element);
    }
    
    if(!answer.length) {
        answer.push("EMPTY");
    }
    
    return answer;
}