const MAX_NUM = 5_000_000;

const solution = (signals) => {
    const n = signals.length;
    const imos = Array(MAX_NUM + 1).fill(0);
    
    for(const [G, Y, R] of signals) {
        let lt = G + 1;
        let rt = lt + Y - 1;
        imos[lt]++;
        imos[rt + 1]--;
        
        while(rt <= MAX_NUM) {
            lt = rt + G + R + 1;
            rt = lt + Y - 1;
            imos[lt]++;
            imos[rt + 1]--;
        }
    }
    
    for(let i = 1; i < imos.length; i++) {
        imos[i] += imos[i - 1];
    }
    
    return imos.indexOf(n);
}