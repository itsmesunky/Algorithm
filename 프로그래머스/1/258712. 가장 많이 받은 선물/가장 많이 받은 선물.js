const solution = (friends, gifts) => {
    // 유저별 선물지수 저장
    const parentIdx = Object.fromEntries(friends.map(i => [i, 0]));
    
    // 유저별 선물 받을 횟수
    const takeCount = Object.fromEntries(friends.map(i => [i, 0]));
    
    // 유저별 특정 유저에게 선물 주고 받은 횟수 저장할 변수
    const giveNTake = Object.fromEntries(friends.map(i => [i, Object.fromEntries(friends.filter(j => j !== i).map(k => [k, Array(2).fill(0)]))]));
    
    // 선물지수 및 선물 주고 받은 횟수 계산
    for(const gift of gifts) {
        const [giver, taker] = gift.split(" ");
        giveNTake[giver][taker][0]++;
        parentIdx[giver]++;
        giveNTake[taker][giver][1]++;
        parentIdx[taker]--;
    }
    
    for(const giver in giveNTake) {
        for(const taker in giveNTake[giver]) {
            const gives = giveNTake[giver][taker][0];
            const takes = giveNTake[giver][taker][1];
            if(gives > takes) {
                takeCount[giver]++;
            } else if(gives === takes) {
                if(parentIdx[giver] > parentIdx[taker]) {
                    takeCount[giver]++;
                }
            }
        }
    }
    
    return Math.max(...Object.values(takeCount));
}