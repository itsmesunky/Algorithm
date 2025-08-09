const solution = (numbers) => {
    const answer = [];
    
    for(const number of numbers) {
        if(number % 2 === 0) {
            // number가 짝수인 경우, 0번째 비트가 0임
            // number에 1을 더하면 0번째 비트가 1로 바뀌므로
            // 짝수일 때는 1만 더하기
            answer.push(number + 1);
        } else {
            // number를 2진수로 변환한 뒤, 마지막 0의 위치를 찾음
            const binaryNum = '0' + number.toString(2);
            const lastIndexOfZero = binaryNum.lastIndexOf('0');
            
            // 마지막 위치의 0을 1로 변경
            let nextBinaryNum = binaryNum.substring(0, lastIndexOfZero)
                              + '1'
                              + binaryNum.substring(lastIndexOfZero + 1);
            
            // 마지막 위치의 0 바로 뒤에 있는 1을 찾음
            const indexOfOne = nextBinaryNum.indexOf('1', lastIndexOfZero + 1);
            
            if(indexOfOne !== -1) {
                nextBinaryNum = nextBinaryNum.substring(0, indexOfOne)
                              + '0' // 해당 1을 0으로 변경
                              + nextBinaryNum.substring(indexOfOne + 1);
            }
            
            answer.push(parseInt(nextBinaryNum, 2));
        }
    }
    
    return answer;
};