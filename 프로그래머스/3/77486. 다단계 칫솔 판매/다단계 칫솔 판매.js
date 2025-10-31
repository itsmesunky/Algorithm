const solution = (enroll, referral, seller, amount) => {
    const map = new Map();
    
    enroll.forEach((name, i) => {
        map.set(name, [referral[i], 0]);
    });
    
    const dfs = (name, money) => {
        const [recommender, total] = map.get(name);
        
        const toReferrer = Math.floor(money * 0.1);
        const toSeller = money - toReferrer;
        
        if(recommender === '-') {
            map.set(name, [recommender, total + (toReferrer < 1 ? money : toSeller)]);
            return;
        } else {
            if(toReferrer < 1) {
                map.set(name, [recommender, total + money]);
                return;
            } else {
                map.set(name, [recommender, total + toSeller]);
                dfs(recommender, toReferrer);    
            }
        }
    };
    
    seller.forEach((name, i) => {
        dfs(name, amount[i] * 100);
    });
    
    return enroll.map(name => map.get(name)[1]);
}