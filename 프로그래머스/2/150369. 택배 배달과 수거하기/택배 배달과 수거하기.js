const solution = (cap, n, deliveries, pickups) => {
    let answer = 0;
    let dRemain = 0;
    let pRemain = 0;

    for (let i = n - 1; i >= 0; i--) {
        dRemain += deliveries[i];
        pRemain += pickups[i];

        while (dRemain > 0 || pRemain > 0) {
            dRemain -= cap;
            pRemain -= cap;
            answer += (i + 1) * 2;
        }
    }

    return answer;
};
