const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

  // 수빈이의 위치와 동생의 위치
  const [N, K] = input[0].split(" ").map(Number);

  const visited = Array(100000).fill(false);
  visited[N] = true;
  const queue = [[N, 0]];
  let head = 0;

  while(head < queue.length) {
    const [currPos, times]  = queue[head++];

    if(currPos === K) {
        console.log(times);
        return;
    }

    const nexts = [currPos - 1, currPos + 1, currPos * 2];
    for(const next of nexts) {
        if(next < 0 || 100_000 < next || visited[next]) continue;
        visited[next] = true;
        queue.push([next, times + 1]);
    }
  }