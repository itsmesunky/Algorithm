const solution = (numbers) => {
  const len = numbers.length;
  const stack = [];
  const answer = Array(len).fill(-1);
  
  for(let i = 0; i < len; i++) {
    while(stack.length && numbers[i] > numbers[stack.at(-1)]) {
      const idx = stack.pop();
      answer[idx] = numbers[i];
    }
    
    stack.push(i);
  }
  
  return answer;
}