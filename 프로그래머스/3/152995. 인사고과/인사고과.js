const solution = (scores) => {
    let answer = 0;
    
    const [a, b] = scores[0];
    const total = a + b; // 완호의 점수 합
    
    // 1. 점수합 내림차순 정렬
    // 2. 근무 태도 점수 내림차순 정렬
    // 3. 동료 평가 점수 내림차순 정렬
    const totals = scores.map(([a, b], i) => [a, b, a + b, i])
                        .sort((a, b) => b[2] - a[2] || b[0] - a[0] || b[1] - a[1]);
    
    // 각 사원이 인센티브를 받을 수 있는지 여부를 저장
    const arr = Array(scores.length).fill(true);
    
    const idx = totals.findIndex(v => v[3] === 0);
    
    for(let i = 0; i <= idx; i++) {
        const [c, d, e, f] = totals[i];
        for(let j = i + 1; j <= idx; j++) {
            const [g, h, k, l] = totals[j];
            if(g < c && h < d) {
                arr[l] = false;
                if(!arr[0]) return -1;
            }
        }
    }
    
    for(let i = 0; i <= idx; i++) {
        if(arr[totals[i][3]]) answer++;
        if(totals[i][2] === total) break;
    }
    
    return answer;
}