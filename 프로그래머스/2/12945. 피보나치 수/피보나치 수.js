const solution = (n) => {
    const dy = Array.from({length: n + 1}, (_, i) => {
        if(i === 0) {
            return 0;
        } else if(i < 3) {
            return 1;
        } else {
            return 0;
        }
    })
    
    for(let i = 3; i <= n; i++) {
        dy[i] = BigInt(dy[i - 1]) + BigInt(dy[i - 2]);
    }
    
    return dy[n] % BigInt(1234567);
}