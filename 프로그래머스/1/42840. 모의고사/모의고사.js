const solution = (answers) => {
    
    const students = {
        1: [1, 2, 3, 4, 5],
        2: [2, 1, 2, 3, 2, 4, 2, 5],
        3: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    }
    
    const scores = [0, 0, 0];
    
    answers.forEach((answer, i) => {
        for(const key in students) {
            const length = students[key].length;
            
            if(students[key][i % length] === answer) {
                scores[key - 1]++;
            }
        }
    })
    
    const maxScore = Math.max(...scores);
    
    const result = [];
    
    scores.forEach((item, i) => {
        if(item === maxScore) result.push(i + 1);
    })
    
    return result.sort((a, b) => a - b);
    
}