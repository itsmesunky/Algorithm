const solution = (cap, n, deliveries, pickups) => {
    let answer = 0;
    
    let d = [...deliveries];
    let p = [...pickups];
    
    for (let i = n - 1; i >= 0; i--) {
        if (d[i] === 0 && p[i] === 0) continue;

        let trips = 0; 
        
        while (d[i] > 0 || p[i] > 0) {
            trips++; // 왕복 횟수 증가
            
            d[i] -= cap; 
            p[i] -= cap;
        }

        answer += (i + 1) * 2 * trips;

        if (i > 0) {
            d[i - 1] += d[i]; // 남은 배달 여유분을 다음 집에 더해줌
            p[i - 1] += p[i]; // 남은 수거 여유분을 다음 집에 더해줌
        }
    }
    
    return answer;
}