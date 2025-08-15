const solution = (bridge_length, weight, truck_weights) => {
    // 경과 시간
    let sec = 0;
    
    // 다리를 나타내는 Queue 자료구조
    const queue = Array(bridge_length).fill(0);
    
    // 현재 다리의 무게
    let currentWeight = 0;
    
    while(truck_weights.length > 0 || currentWeight > 0) {
        // 시간 증가
        sec++;
        
        // 다리의 맨 앞의 트럭 제거
        currentWeight -= queue.shift();
        
        // 다음 트럭
        const next = truck_weights[0];
        
        if(next && currentWeight + next <= weight) {
            const truckWeight = truck_weights.shift();
            queue.push(truckWeight);
            currentWeight += truckWeight;
        } else {
            queue.push(0);
        }
    }
    
    return sec;
}