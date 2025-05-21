function solution(n) {
  const answer = Array.from({ length: n }, () => Array(n).fill(0));

  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  let x = 0, y = 0;
  let dir = 0; 
  let num = 1;

  while (num <= n * n) {
    answer[x][y] = num++;

    const nx = x + dx[dir];
    const ny = y + dy[dir];

    if (
      nx < 0 || ny < 0 || nx >= n || ny >= n || answer[nx][ny] !== 0
    ) {
      dir = (dir + 1) % 4;
    }

    x += dx[dir];
    y += dy[dir];
  }

  return answer;
}
