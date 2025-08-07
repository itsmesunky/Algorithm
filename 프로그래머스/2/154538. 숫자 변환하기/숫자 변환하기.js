const solution = (x, y, n) => {
  if (x === y) return 0;

  const visited = Array(y + 1).fill(false);
  const queue = [x];
  let idx = 0;
  let count = 0;

  visited[x] = true;

  while (idx < queue.length) {
    const len = queue.length;
    count++;

    for (let i = idx; i < len; i++) {
      const current = queue[i];
      const nexts = [current + n, current * 2, current * 3];

      for (const next of nexts) {
        if (next > y || visited[next]) continue;
        if (next === y) return count;

        visited[next] = true;
        queue.push(next);
      }
    }

    idx = len;
  }

  return -1;
};
