/**
* 문제 해결 시나리오
* 1. 이동 횟수를 최소화하기 위해서는 배달 또는 수거를 해야할 목적지 중, 물류창고로부터 가장 먼 목적지부터 작업을 끝내야 함
* 2. 1번에서 선택한 가장 먼 목적지까지 이동하면서 가능한 잔여 배달량과 잔여 수거량을 계산
*/
const solution = (cap, n, deliveries, pickups) => {
    let answer = 0;
    
    // 배달 또는 수거가 필요한 목적지 중 물류창고로부터 가장 먼 목적지 선택
    while(n && !deliveries[n - 1] && !pickups[n - 1]) {
        n--;
    }
    
    // 배달 및 수거 잔여량
    let restD = 0;
    let restP = 0;
    
    for(let i = n - 1; i >= 0; i--) {
        // 배달 또는 수거할 택배가 없으면 다음 집으로 이동
        if(!deliveries[i] && !pickups[i]) continue;
        
        restD += deliveries[i];
        restP += pickups[i];
        
        // 편도 횟수
        let moves = 0;
        
        // 해당 집 배달 작업을 완료하기 위해 필요한 편도 횟수
        const moveToDelivery = Math.ceil(restD / cap);
        // 해당 집 수거 작업을 완료하기 위해 필요한 편도 횟수
        const moveToPickUp = Math.ceil(restP / cap);
        
        moves = Math.max(moveToDelivery, moveToPickUp);
        
        // 왕복 횟수 누적
        answer += moves * (i + 1) * 2;
        
        // 왕복할 때마다 처리할 수 있는 배달 및 수거 작업 진행
        restD -= moves * cap;
        restP -= moves * cap; 
    }
    
    return answer;
};