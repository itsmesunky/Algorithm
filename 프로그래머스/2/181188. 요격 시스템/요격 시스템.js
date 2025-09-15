function solution(targets) {
    // 1. 폭격 미사일의 끝 지점(e)을 기준으로 오름차순 정렬
    // (시작 지점(s)으로 정렬해도 가능하지만, 끝 지점 정렬이 더 직관적)
    targets.sort((a, b) => a[1] - b[1]);

    let interceptCount = 0;
    let lastInterceptPoint = -1; // 초기 요격 지점은 -1로 설정 (x 좌표는 0 이상)

    for (const target of targets) {
        const [s, e] = target;

        // 현재 폭격 미사일의 시작 지점이 마지막 요격 지점보다 크거나 같다면,
        // 현재 요격 미사일로는 요격할 수 없으므로 새로운 미사일 발사 필요
        if (s >= lastInterceptPoint) {
            interceptCount++;
            lastInterceptPoint = e; // 새로운 요격 지점을 현재 폭격 미사일의 끝 지점으로 갱신
        }
    }

    return interceptCount;
}