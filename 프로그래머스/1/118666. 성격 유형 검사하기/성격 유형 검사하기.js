const solution = (survey, choices) => {
    // 각 유형의 점수를 저장할 Map
    const map = new Map([
        ["R", 0], ["T", 0],
        ["C", 0], ["F", 0],
        ["J", 0], ["M", 0],
        ["A", 0], ["N", 0],
    ]);
    
    // 각 지표 배열
    const characters = ["RT", "CF", "JM", "AN"];
    
    survey.forEach(([a, b], i) => {
        const choice = choices[i];
        
        if(choice > 4) {
            map.set(b, map.get(b) + Math.abs(choice - 4));
        } else if(choice < 4) {
            map.set(a, map.get(a) + Math.abs(choice - 4));
        }
    });
    
    return characters.map(([a, b]) => {
        const aScore = map.get(a);
        const bScore = map.get(b);
        
        if(aScore > bScore) {
            return a;
        } else if(aScore < bScore) {
            return b;
        } else {
            return [a, b].sort((a, b) => a - b)[0];
        }
    }).join('');
    
    
}