const solution = (enroll, referral, seller, amount) => {
    const map = new Map();
    
    enroll.forEach((name, i) => {
        map.set(name, [referral[i], 0]);
    });
    
    const distribute = (name, money) => {
        const [recommender, total] = map.get(name);
        
        const toReferrer = Math.floor(money * 0.1);
        const toSeller = money - toReferrer;
        
        const flag = toReferrer < 1;
        
        map.set(name, [recommender, total + (flag ? money : toSeller)]);
        
        if(recommender === '-' || flag) return;
        distribute(recommender, toReferrer);
    };
    
    seller.forEach((name, i) => {
        distribute(name, amount[i] * 100);
    });
    
    return enroll.map(name => map.get(name)[1]);
}