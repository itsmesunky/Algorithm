function solution(land) {
    const rows = land.length;

    // land 배열 자체를 DP 테이블로 활용
    for (let i = 1; i < rows; i++) {
        land[i][0] += Math.max(land[i-1][1], land[i-1][2], land[i-1][3]);
        land[i][1] += Math.max(land[i-1][0], land[i-1][2], land[i-1][3]);
        land[i][2] += Math.max(land[i-1][0], land[i-1][1], land[i-1][3]);
        land[i][3] += Math.max(land[i-1][0], land[i-1][1], land[i-1][2]);
    }

    // 마지막 행에서 가장 큰 값을 반환
    return Math.max(...land[rows-1]);
}