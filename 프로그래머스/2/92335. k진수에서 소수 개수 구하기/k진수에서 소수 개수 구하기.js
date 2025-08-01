// 소수 판별 함수
const isPrime = (num) => {
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(!(num % i)) return false;
    }
    
    return true;
}

const solution = (n, k) => {
    return n.toString(k)
            .split("0")
            .filter(num => num !== "1" && num !== "")
            .reduce((acc, cur) => isPrime(parseInt(cur)) ? acc + 1 : acc, 0);
}
