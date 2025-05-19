const solution = (quiz) => {
    return quiz.map(v => {
        const array = v.split(" ");
        
        const [left, operator, right, _, result] = array;
        
        switch(operator) {
            case "+":
                return +left + +right === +result ? "O" : "X";
            case "-":
                return +left - +right === +result ? "O" : "X";
        }
    })
}