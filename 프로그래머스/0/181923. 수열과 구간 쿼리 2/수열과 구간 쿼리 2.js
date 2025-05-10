const solution = (arr, queries) => {
    let answer = [];
    
    for(const [s,e,k] of queries) {
        let filteredItem = arr.slice(s, e + 1).filter(item => k < item);
        
        if(filteredItem.length === 0) {
            answer.push(-1);
        } else {
            answer.push(Math.min(...filteredItem));
        }
    }
    
    return answer;
}