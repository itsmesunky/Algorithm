function solution(k, dungeons) {
    let maxDungeons = 0; // 최대로 탐험할 수 있는 던전 수
    const visited = new Array(dungeons.length).fill(false); // 던전 방문 여부를 기록할 배열

    // DFS (깊이 우선 탐색) 함수 정의
    // currentK: 현재 남아있는 피로도
    // count: 현재까지 탐험한 던전의 개수
    function dfs(currentK, count) {
        // 모든 재귀 호출마다 현재까지 탐험한 던전 수를 최댓값과 비교하여 갱신
        maxDungeons = Math.max(maxDungeons, count);

        // 아직 방문하지 않은 모든 던전에 대해 탐험 시도
        for (let i = 0; i < dungeons.length; i++) {
            const [minRequired, consumed] = dungeons[i];

            // 1. 이 던전을 아직 방문하지 않았고,
            // 2. 현재 피로도가 이 던전에 들어가기 위한 최소 필요 피로도 이상이라면,
            if (!visited[i] && currentK >= minRequired) {
                visited[i] = true; // 던전 방문 표시
                dfs(currentK - consumed, count + 1); // 해당 던전을 탐험하고 다음 재귀 호출
                visited[i] = false; // 백트래킹: 이 던전 방문 표시를 해제하여 다른 경로에서 다시 탐험할 수 있도록 함
            }
        }
    }

    // 초기 호출: 주어진 피로도 k와 0개의 탐험 던전으로 시작
    dfs(k, 0);

    return maxDungeons;
}