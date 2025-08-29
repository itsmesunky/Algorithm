function solution(expression) {
    const operators = ['+', '-', '*'];
    const permutations = [];
    const visited = new Array(operators.length).fill(false);
    
    // 연산자 순열 생성 함수 (DFS를 이용한 백트래킹)
    function getPermutations(arr, result) {
        if (arr.length === operators.length) {
            permutations.push([...arr]);
            return;
        }

        for (let i = 0; i < operators.length; i++) {
            if (!visited[i]) {
                visited[i] = true;
                arr.push(operators[i]);
                getPermutations(arr, result);
                arr.pop();
                visited[i] = false;
            }
        }
    }
    
    getPermutations([], permutations);

    const numbers = expression.split(/[^0-9]/).map(Number);
    const ops = expression.split(/[0-9]+/).filter(op => op);
    
    let maxAbsValue = 0;

    for (const perm of permutations) {
        const tempNumbers = [...numbers];
        const tempOps = [...ops];

        for (const op of perm) {
            let i = 0;
            while (i < tempOps.length) {
                if (tempOps[i] === op) {
                    let result;
                    const num1 = tempNumbers[i];
                    const num2 = tempNumbers[i + 1];

                    switch (op) {
                        case '+':
                            result = num1 + num2;
                            break;
                        case '-':
                            result = num1 - num2;
                            break;
                        case '*':
                            result = num1 * num2;
                            break;
                    }

                    tempNumbers.splice(i, 2, result);
                    tempOps.splice(i, 1);
                } else {
                    i++;
                }
            }
        }
        
        maxAbsValue = Math.max(maxAbsValue, Math.abs(tempNumbers[0]));
    }
    
    return maxAbsValue;
}