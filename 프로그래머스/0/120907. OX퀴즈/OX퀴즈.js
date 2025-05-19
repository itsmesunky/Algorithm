const solution = (quiz) => {
    return quiz.map(v => {
        const array = v.split(" ");
        
        const left = +array[0];
        const operator = array[1];
        const right = +array[2];
        const result = +array[4];
        
        switch(operator) {
            case "+":
                return left + right === result ? "O" : "X";
            case "-":
                return left - right === result ? "O" : "X";
        }
    })
}