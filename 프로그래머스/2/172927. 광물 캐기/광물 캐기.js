const solution = (picks, minerals) => {
    let answer = 0;
    
    // 곡괭이별 채굴 광물별 피로도 정의
    const fatigue = {
        0: {
            'diamond': 1,
            'iron': 1,
            'stone': 1
        },
        1: {
            'diamond': 5,
            'iron': 1,
            'stone': 1
        },
        2: {
            'diamond': 25,
            'iron': 5,
            'stone': 1
        }
    };
    
    // 현재 가진 곡괭이의 수로 채굴할 수 있는 광물의 수
    const totalPicks = picks.reduce((acc, cur) => acc += cur);
    const slicedMinerals = minerals.slice(0, (5 * totalPicks));
    
    // minerals 배열에서 원소를 5개씩 묶었을 때, 곡괭이별 피로도 저장
    const group = [];
    
    for(let i = 0; i < slicedMinerals.length; i += 5) {
        const arr = [0, 0, 0];
        const sliced = slicedMinerals.slice(i, i + 5);
        
        for(let j = 0; j < 3; j++) {
            for(let k = 0; k < sliced.length; k++) {
                arr[j] += fatigue[j][sliced[k]];
            }
        }
        
        group.push(arr);
    }
    
    // stone 곡괭이로 채굴 시의 소모 피로도 내림차순 정렬
    group.sort((a, b) => b[2] - a[2]);
    
    let copiedPicks = [...picks];
    let head = 0;
    
    while(head < group.length) {
        // 더 사용할 곡괭이가 없는 경우
        if(copiedPicks.every(v => !v)) break;
        
        for(let i = 0; i < 3; i++) {
            if(!copiedPicks[i]) {
                continue;
            } else {
                answer += group[head][i];
                copiedPicks[i]--;
                head++;
                break;
            }
        }
    }
    
    return answer;
}