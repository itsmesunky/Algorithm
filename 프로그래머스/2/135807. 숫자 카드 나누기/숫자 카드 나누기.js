// 최대공약수 찾기
const GCD = (a, b) => a % b ? GCD(b, a % b) : b;

const solution = (arrayA, arrayB) => {
    let answers = 0;
    
    let gcdA; // 철수가 가진 카드의 최대 공약수를 저장
    let gcdB; // 영희가 가진 카드의 최대 공약수를 저장
    
    // 카드가 각각 한 개인 경우
    if(arrayA.length === 1) {
        gcdA = arrayA[0];
        gcdB = arrayB[0];
    } else {
        gcdA = GCD(arrayA[0], arrayA[1]);
        gcdB = GCD(arrayB[0], arrayB[1]);
    }
    
    for(let i = 2; i < arrayA.length; i++) {
        gcdA = GCD(gcdA, arrayA[i]);
        gcdB = GCD(gcdB, arrayB[i]);
    }
    
    if(gcdA > 1) { // 철수가 가진 카드들에 적힌 모든 숫자를 나눌 수 있는 수
        // 영희가 가진 카드들은 모두 나눠지지 않아야 함
        if(!(arrayB.some(v => v % gcdA === 0))) {
            answers = Math.max(answers, gcdA);
        }
    }
    
    if(gcdB > 1) { // 영희가 가진 카드들에 적힌 모든 숫자를 나눌 수 있는 수
        // 철수가 가진 카드들은 모두 나눠지지 않아야 함
        if(!(arrayA.some(v => v % gcdB === 0))) {
            answers = Math.max(answers, gcdB);
        }
    }
    
    return answers;
}