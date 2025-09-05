const solution = (picks, minerals) => {
    // 1. 곡괭이의 총 개수와 캘 수 있는 최대 광물 수
    const totalPicks = picks.reduce((a, b) => a + b, 0);
    const availableMinerals = minerals.slice(0, totalPicks * 5);
    
    // 2. 광물을 5개씩 그룹화하고 각 곡괭이별 피로도 계산
    const groups = [];
    for (let i = 0; i < availableMinerals.length; i += 5) {
        let dia = 0;
        let iron = 0;
        let stone = 0;
        
        const subMinerals = availableMinerals.slice(i, i + 5);
        for (const mineral of subMinerals) {
            if (mineral === 'diamond') {
                dia += 1;
                iron += 5;
                stone += 25;
            } else if (mineral === 'iron') {
                dia += 1;
                iron += 1;
                stone += 5;
            } else { // stone
                dia += 1;
                iron += 1;
                stone += 1;
            }
        }
        groups.push({ dia, iron, stone });
    }
    
    // 3. 돌 곡괭이로 캤을 때의 피로도가 큰 순서로 그룹 정렬
    groups.sort((a, b) => b.stone - a.stone);
    
    let totalFatigue = 0;
    
    // 4. 정렬된 그룹에 가장 좋은 곡괭이부터 순서대로 사용
    for (const group of groups) {
        if (picks[0] > 0) { // 다이아몬드 곡괭이
            totalFatigue += group.dia;
            picks[0]--;
        } else if (picks[1] > 0) { // 철 곡괭이
            totalFatigue += group.iron;
            picks[1]--;
        } else if (picks[2] > 0) { // 돌 곡괭이
            totalFatigue += group.stone;
            picks[2]--;
        }
    }
    
    return totalFatigue;
};