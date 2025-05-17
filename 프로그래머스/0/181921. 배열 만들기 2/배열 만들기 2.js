const solution = (l, r) => {
    const answer = [];
    
    for(let i = 1; i <= 127; i++) {
        let num = +i.toString(2) * 5;
        
        if(num >= l && num <= r) {
            answer.push(num);
        }
    }
    
    return answer.length === 0 ? [-1] : answer;
}