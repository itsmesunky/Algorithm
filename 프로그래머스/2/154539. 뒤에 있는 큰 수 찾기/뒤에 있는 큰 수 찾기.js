const solution = (numbers) => {
    const n = numbers.length;
    const answer = Array(n).fill(-1);
    const stack = [];
    
    for(let i = 0; i < n; i++) {
        while(stack.length && numbers[stack.at(-1)] < numbers[i]) {
            answer[stack.pop()] = numbers[i];
        }

        // stack에 인덱스 삽입
        stack.push(i);
    }
    
    return answer;
}