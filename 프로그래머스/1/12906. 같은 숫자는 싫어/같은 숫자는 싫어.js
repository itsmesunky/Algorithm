const solution = (arr) => {
    const answer = [];
    
    arr.forEach((item, i) => {
        if(i === 0) {
            answer.push(item);
        } else {
            if(answer[answer.length - 1] !== item) {
                answer.push(item);
            }
        }
    })
    
    return answer;
}