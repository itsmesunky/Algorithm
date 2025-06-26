const solution = (lottos, win_nums) => {
    const scores = {
        6: 1,
        5: 2,
        4: 3,
        3: 4,
        2: 5,
        1: 6,
        0: 6
    };
    
    const equals = lottos.reduce((acc, cur) => win_nums.includes(cur) ? acc += 1 : acc, 0);
    const zeros = lottos.filter(lotto => lotto === 0).length;
    
    return [scores[equals + zeros], scores[equals]];
}