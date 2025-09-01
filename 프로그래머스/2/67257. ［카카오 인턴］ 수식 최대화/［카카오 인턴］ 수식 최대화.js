/**
* 문제 해결 시나리오
* 1. 연산자 3개로 만들 수 있는 순열 만듥기
* 2. 해당 순열로 모든 경우의 수를 계산
*/
const solution = (expression) => {
    let answer = 0;
    
    const visited = Array(3).fill(false);
    const operators = ['*', '+', '-'];
    
    // 순열 저장 배열
    const perms = [];
    
    // 1. 연산자 3개 우선순위 순열 만들기(DFS)
    const getPermutation = (arr) => {
        // 1.1 탈출 조건
        if(arr.length === operators.length) {
            perms.push([...arr]);
            return;
        }
        
        // 1.2 수행 동작
        for(let i = 0; i < operators.length; i++) {
            if(!visited[i]) {
                visited[i] = true;
                arr.push(operators[i]);
                getPermutation(arr);
                arr.pop();
                visited[i] = false;
            }
        }
    }
    
    getPermutation([]);
    
    console.log(perms);
    
    // 2. 수식 내 피연산자 및 연산자 구분
    const numbers = expression.split(/[^0-9]/).map(Number);
    const opers = expression.split(/[0-9]/).filter(op => op); // 빈 문자열 제거
    
    // 3. 우선순위 수열만큼 루프
    for(const perm of perms) {
        // 3.1 매순열마다 새로운 계산을 위해 shallow copy
        const copiedNumbers = [...numbers];
        const copiedOpers = [...opers];
        
        for(const op of perm) {
            let idx = 0;
            while(idx < copiedOpers.length) {
                if(copiedOpers[idx] === op) {
                    let result = 0;
                    
                    const num1 = copiedNumbers[idx];
                    const num2 = copiedNumbers[idx + 1];
                    
                    switch(op) {
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
                    
                    copiedNumbers.splice(idx, 2, result);
                    copiedOpers.splice(idx, 1);
                } else {
                    idx++;
                }
            }
        }
        
        answer = Math.max(answer, Math.abs(copiedNumbers[0]));
    }
    
    return answer;
}