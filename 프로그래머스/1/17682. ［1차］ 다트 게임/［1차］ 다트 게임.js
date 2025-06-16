const solution = (dartResult) => {
    const bonusMap = {
        "S": 1,
        "D": 2,
        "T": 3
    };
    
    const scores = [];
    const rounds = dartResult.match(/\d+[SDT][*#]?/g); // ['1D', '2S#', '10S']
    
    rounds.forEach((round, i) => {
        let total = 0;
        const [_, score, bonus, option] = round.match(/(\d+)([SDT])([*#]?)/);
        total += Math.pow(+score, bonusMap[bonus]);
        
        if(option === '*') {
            total *= 2;
            if(i !== 0) {
                scores[i - 1] *= 2;
            }
        } else if(option === '#') {
            total *= -1;
        }
        
        scores.push(total);
    })
    
    return scores.reduce((acc, cur) => acc += cur, 0);
    
}