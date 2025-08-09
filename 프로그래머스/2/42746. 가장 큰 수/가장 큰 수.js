function solution(numbers) {
    const stringNumbers = numbers.map(num => String(num));

    stringNumbers.sort((a, b) => (b + a) - (a + b));
    
    const answer = stringNumbers.join('');

    return answer[0] === '0' ? '0' : answer;
}