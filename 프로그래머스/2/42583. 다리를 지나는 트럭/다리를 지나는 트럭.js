const solution = (bridge_length, weight, truck_weights) => {
    // 경과 시간
    let sec = 1;
    
    // 트럭을 가리키는 인덱스
    let truck = 0;
    
    // 다리를 나타내는 Queue 자료구조
    const queue = Array(bridge_length).fill(0);
    
    while(true) {
        // 맨 앞의 트럭 제거
        queue.shift();
        
        // 다리 위 트럭 무게
        const sum = queue.reduce((acc, cur) => acc + cur, 0);
        
        if(!sum && truck === truck_weights.length) {
            break;
        }
        
        // 다음 트럭
        const next = truck_weights[truck];
        
        if(sum < weight && sum + next <= weight) {
            queue.push(next);
            truck++;
        } else {
            queue.push(0);
        }
        
        // 시간 증가
        sec++;
    }
    
    return sec;
}