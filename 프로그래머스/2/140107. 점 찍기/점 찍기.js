function solution(k, d) {
  let answer = 0;

  for (let x = 0; x <= d; x += k) {
    const yMax = Math.floor(Math.sqrt(d * d - x * x));
    answer += Math.floor(yMax / k) + 1;
  }

  return answer;
}