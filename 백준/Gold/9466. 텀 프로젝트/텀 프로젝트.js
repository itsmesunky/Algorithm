const fs = require('fs');
function solve() {
  // 전체 입력을 한 번에 읽어 처리 (속도 향상)
  const input = fs.readFileSync(0).toString().split(/\s+/);
  let idx = 0;

  let T = parseInt(input[idx++]); // 테스트 케이스 개수
  const output = [];

  while (T--) {
    const n = parseInt(input[idx++]);
    const arr = new Int32Array(n + 1);
    for (let i = 1; i <= n; i++) {
      arr[i] = parseInt(input[idx++]);
    }

    const visited = new Uint8Array(n + 1);  // 방문 여부
    const finished = new Uint8Array(n + 1); // 탐색 완료 여부 (사이클 판단 완료)
    let countInTeam = 0; // 팀에 속한(사이클인) 학생 수

    for (let i = 1; i <= n; i++) {
      if (visited[i]) continue;

      let curr = i;
      // 1. 방문하지 않은 노드를 따라 계속 이동
      while (!visited[curr]) {
        visited[curr] = 1;
        curr = arr[curr];
      }

      // 2. 만약 현재 도달한 노드가 방문은 되었는데 '탐색 완료'는 아니라면 사이클 발견
      if (!finished[curr]) {
        let temp = curr;
        // 사이클을 따라 돌면서 사이클에 포함된 노드 개수 카운트
        while (!finished[temp]) {
          finished[temp] = 1;
          countInTeam++;
          temp = arr[temp];
        }
      }

      // 3. 현재 경로에 있었던 노드들을 '탐색 완료' 처리
      // (이미 사이클로 처리된 노드는 위에서 1로 바뀌었으므로 나머지만 처리됨)
      let trace = i;
      while (!finished[trace]) {
        finished[trace] = 1;
        trace = arr[trace];
      }
    }

    // 결과: 전체 학생 수 - 팀에 속한 학생 수
    output.push(n - countInTeam);
  }

  console.log(output.join('\n'));
}

solve();