const isUpperCase = (char) => {
    return /^[A-Z]+$/.test(char);
}

const solution = (my_string) => {
    let answer = Array.from({length: 52}, () => 0);
    
    for(const char of my_string) {
        if(isUpperCase(char)) {
            answer[char.charCodeAt() - 65] += 1;
        } else {
            answer[char.charCodeAt() - 71] += 1;
        }
    }
    
    return answer;
}
