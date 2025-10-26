function solution(gems) {
  const totalKinds = new Set(gems).size;
  const counter = new Map();
  let answer = [0, gems.length - 1];

  let left = 0;
  for (let right = 0; right < gems.length; right++) {
    counter.set(gems[right], (counter.get(gems[right]) || 0) + 1);

    while (counter.size === totalKinds) {
      if (right - left < answer[1] - answer[0]) {
        answer = [left, right];
      }

      // 왼쪽 보석 제거
      const gem = gems[left];
      counter.set(gem, counter.get(gem) - 1);
      if (counter.get(gem) === 0) counter.delete(gem);
      left++;
    }
  }

  return [answer[0] + 1, answer[1] + 1];
}
