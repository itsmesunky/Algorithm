const solution = (my_string, queries) => {
    let answer = my_string;
    
    for(const [s,e] of queries) {
        answer = answer.slice(0, s) + [...answer.slice(s, e +1)].reverse().join('') + answer.slice(e + 1); 
    }
    
    return answer;
}