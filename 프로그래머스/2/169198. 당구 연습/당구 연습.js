function solution(m, n, startX, startY, balls) {
  const results = [];

  for (const [ballX, ballY] of balls) {
    let minDist = Infinity;

    const mirrors = [
      [ballX, -ballY],       // 아래쪽 반사
      [ballX, 2 * n - ballY],// 위쪽 반사
      [-ballX, ballY],       // 왼쪽 반사
      [2 * m - ballX, ballY] // 오른쪽 반사
    ];

    for (const [mirrorX, mirrorY] of mirrors) {
      if (startX === ballX) {
        if (startY < ballY && mirrorY > ballY) continue;
        if (startY > ballY && mirrorY < ballY) continue;
      }
      if (startY === ballY) {
        if (startX < ballX && mirrorX > ballX) continue;
        if (startX > ballX && mirrorX < ballX) continue;
      }

      const dist =
        (startX - mirrorX) ** 2 + (startY - mirrorY) ** 2;

      minDist = Math.min(minDist, dist);
    }

    results.push(minDist);
  }

  return results;
}
