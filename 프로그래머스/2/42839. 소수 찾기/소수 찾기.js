// 소수 판별 함수
const isPrime = (number) => {
    if(number === 0 || number === 1) return false;

    for(let i = 2; i <= Math.sqrt(number); i++) {
        if(number % i === 0) return false;
    }

    return true;
}


const solution = (numbers) => {
    let answer = 0;
    const primeSet = new Set();
    const visited = Array(7).fill(false);
    
    const dfs = (str) => {
        // 1. 탈출 조건 작성
        if(str.length === numbers.length) return;

        // 2. 수행 동작
        for(let i = 0; i < numbers.length; i++) {
            if(!visited[i]) {
                visited[i] = true;
                const num = parseInt(str + numbers[i]);
                
                if(isPrime(num)) {
                    primeSet.add(num);
                }
                
                dfs(str + numbers[i]);
                
                // 백트래킹
                visited[i] = false;
            }
        }
    }
    
    dfs('');

    return primeSet.size;
}