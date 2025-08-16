function solution(n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(Array(i + 1).fill(0));
  }

  let x = -1;
  let y = 0;
  let num = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      num++;
      if (i % 3 === 0) { // 아래로 이동
        x++;
      } else if (i % 3 === 1) { // 오른쪽으로 이동
        y++;
      } else { // 위로 이동 (대각선)
        x--;
        y--;
      }
      result[x][y] = num;
    }
  }

  // 2차원 배열을 1차원 배열로 변환
  return result.flatMap((v) => v);
}