const solution = (bridge_length, weight, truck_weights) => {
    let sec = 0;
    let truckIndex = 0;
    const queue = Array(bridge_length).fill(0);
    let currentWeight = 0;

    while (true) {
        sec++;

        // 다리 맨 앞 트럭(또는 빈 자리) 제거
        currentWeight -= queue.shift();

        // 종료 조건
        if (currentWeight === 0 && truckIndex === truck_weights.length) break;

        const nextTruck = truck_weights[truckIndex];
        if (nextTruck && currentWeight + nextTruck <= weight) {
            queue.push(nextTruck);
            currentWeight += nextTruck;
            truckIndex++;
        } else {
            queue.push(0);
        }
    }
    return sec;
};
