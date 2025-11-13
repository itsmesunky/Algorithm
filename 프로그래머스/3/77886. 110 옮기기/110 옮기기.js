function solution(s) {
  const answer = [];

  for (const str of s) {
    const stack = [];
    let count110 = 0;

    // 1. 모든 "110"을 빼내고 개수 세기
    for (const ch of str) {
      stack.push(ch);

      if (
        stack.length >= 3 &&
        stack[stack.length - 3] === '1' &&
        stack[stack.length - 2] === '1' &&
        stack[stack.length - 1] === '0'
      ) {
        stack.pop();
        stack.pop();
        stack.pop();
        count110++;
      }
    }

    // 2. 남은 문자열에서 "110"을 끼워넣을 위치 찾기
    const base = stack.join('');
    const insert = '110'.repeat(count110);

    // 2-1. 남은 문자열에서 가장 마지막 '0'의 위치
    const lastZeroIdx = base.lastIndexOf('0');

    // 2-2. '0'이 하나도 없으면 맨 앞에 다 집어넣기
    if (lastZeroIdx === -1) {
      answer.push(insert + base);
    } else {
      // 2-3. 마지막 '0' 바로 뒤에 "110"들 전부 삽입
      const left = base.slice(0, lastZeroIdx + 1);
      const right = base.slice(lastZeroIdx + 1);
      answer.push(left + insert + right);
    }
  }

  return answer;
}
